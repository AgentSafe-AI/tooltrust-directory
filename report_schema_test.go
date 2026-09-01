package directory

import (
	"encoding/json"
	"os"
	"testing"
)

func TestFindingSchemaAllowsToolName(t *testing.T) {
	raw, err := os.ReadFile("report.schema.json")
	if err != nil {
		t.Fatalf("read schema: %v", err)
	}

	var schema map[string]any
	if err := json.Unmarshal(raw, &schema); err != nil {
		t.Fatalf("parse schema: %v", err)
	}

	defs, ok := schema["$defs"].(map[string]any)
	if !ok {
		t.Fatal("schema is missing $defs")
	}
	finding, ok := defs["Finding"].(map[string]any)
	if !ok {
		t.Fatal("schema is missing Finding definition")
	}
	properties, ok := finding["properties"].(map[string]any)
	if !ok {
		t.Fatal("Finding definition is missing properties")
	}
	if _, ok := properties["tool_name"]; !ok {
		t.Fatal("Finding schema must allow tool_name emitted by the transformer")
	}
}
