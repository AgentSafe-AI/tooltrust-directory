package main

import "testing"

func TestNormalizeScannerVersion(t *testing.T) {
	t.Parallel()

	cases := map[string]string{
		"":                         "",
		"unknown":                  "",
		"v0.3.3":                   "v0.3.3",
		"0.3.3":                    "v0.3.3",
		"tooltrust-scanner/v0.3.3": "v0.3.3",
		"ToolTrust Scanner/v0.3.3": "v0.3.3",
		"ToolTrust Scanner 0.3.3":  "v0.3.3",
	}

	for input, want := range cases {
		if got := normalizeScannerVersion(input); got != want {
			t.Fatalf("normalizeScannerVersion(%q) = %q, want %q", input, got, want)
		}
	}
}

func TestShouldForceRescan(t *testing.T) {
	t.Run("manual flag wins", func(t *testing.T) {
		t.Setenv("FORCE_RESCAN", "true")
		if !shouldForceRescan(map[string]*ExistingReport{}, "v0.3.3") {
			t.Fatal("expected manual FORCE_RESCAN to force rescan")
		}
	})

	t.Run("scanner upgrade forces rescan", func(t *testing.T) {
		t.Setenv("FORCE_RESCAN", "")
		existing := map[string]*ExistingReport{
			"tool-a": {ToolID: "tool-a", Scanner: "tooltrust-scanner/v0.2.1"},
		}
		if !shouldForceRescan(existing, "v0.3.3") {
			t.Fatal("expected scanner version drift to force rescan")
		}
	})

	t.Run("matching scanner version does not force", func(t *testing.T) {
		t.Setenv("FORCE_RESCAN", "")
		existing := map[string]*ExistingReport{
			"tool-a": {ToolID: "tool-a", Scanner: "tooltrust-scanner/v0.3.3"},
			"tool-b": {ToolID: "tool-b", Scanner: "v0.3.3"},
		}
		if shouldForceRescan(existing, "v0.3.3") {
			t.Fatal("did not expect rescan when all reports already match latest scanner")
		}
	})
}
