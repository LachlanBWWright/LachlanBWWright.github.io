#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd -- "$script_dir/.." && pwd)"
input_pdf="$repo_root/static/Resume.pdf"
output_image="$repo_root/static/Resume-Page-1.jpg"
temporary_dir="$(mktemp -d)"

cleanup() {
  rm -rf -- "$temporary_dir"
}
trap cleanup EXIT

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "Error: pdftoppm is required to generate the resume thumbnail." >&2
  exit 1
fi

pdftoppm -f 1 -singlefile -jpeg -r 150 \
  "$input_pdf" "$temporary_dir/Resume-Page-1"

mv -- "$temporary_dir/Resume-Page-1.jpg" "$output_image"
echo "Generated $output_image"
