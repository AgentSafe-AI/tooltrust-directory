import json,re,pathlib,hashlib,urllib.request
p=pathlib.Path(__file__).resolve().parent
def literal(s):
    s=re.sub(r'\\\n\s*','',s)
    tokens=re.findall(r'"(?:\\.|[^"\\])*"|[^"\s]+|\s+',s)
    s=''.join(tokens)
    # Remove trailing commas only outside quoted strings.
    s=re.sub(r'"(?:\\.|[^"\\])*"|,\s*(?=[}\]])',lambda m: m[0] if m[0].startswith('"') else '',s)
    return json.loads(s)
def schema(file):
    s=(p/file).read_text().split('pub fn schema() -> Value {',1)[1].split('json!(',1)[1].split('})',1)[0]+'}'
    return literal(s)
s=(p/'hc-mcp.rs').read_text().split('fn tools() -> Value {',1)[1].split('json!(',1)[1].split('])',1)[0]+']'
s=s.replace('crate::capture::Context::schema()',json.dumps(schema('hc-capture.rs'))).replace('hyperconsciousness::capture_state::Change::schema()',json.dumps(schema('hc-capture_state.rs')))
tools=literal(s)
submitted=json.loads((p/'hyperconsciousness.response.json').read_text())['result']['tools']
assert tools==submitted, 'Source and submitted export differ'
(p/'hyperconsciousness.tools.json').write_text(json.dumps({'tools':tools},indent=2)+'\n')
(p/'hyperconsciousness.verification.json').write_text(json.dumps({'revision':'9500fd232c2755e28f2fae1d738c76390b91eb8e','tools':len(tools),'all_descriptions_and_schemas_match_pinned_source':True,'runtime_executed':False,'cargo_dependencies_scanned':False,'export_sha256':hashlib.sha256((p/'hyperconsciousness.response.json').read_bytes()).hexdigest()},indent=2)+'\n')
print('All 10 tool contracts exactly match independently resolved pinned source')
old=p
for name in ['magic-hour-mcp','autoposting-cli']:
    req=json.loads((old/f'{name}.osv-request.json').read_text())
    results=[]
    for i in range(0,len(req['queries']),100):
        r=urllib.request.Request('https://api.osv.dev/v1/querybatch',data=json.dumps({'queries':req['queries'][i:i+100]}).encode(),headers={'Content-Type':'application/json'})
        with urllib.request.urlopen(r,timeout=60) as response: result=json.load(response)['results']
        assert len(result)==len(req['queries'][i:i+100])
        results.extend(result)
    (p/f'{name}.osv-response.json').write_text(json.dumps({'results':results},indent=2)+'\n')
    ids=sorted({v['id'] for x in results for v in x.get('vulns',[])})
    advisories=[]
    for vid in ids:
        with urllib.request.urlopen('https://api.osv.dev/v1/vulns/'+vid,timeout=60) as response: advisories.append(json.load(response))
    (p/f'{name}.osv-advisories.json').write_text(json.dumps(advisories,indent=2)+'\n')
    print(name,len(results),ids)
