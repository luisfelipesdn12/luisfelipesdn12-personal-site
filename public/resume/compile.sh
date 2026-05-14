#!/usr/bin/env bash
set -euo pipefail

# Compila resume.tex -> "Luis Felipe - Currículo.pdf"
# Requer: pdflatex (TeX Live) instalado.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

SRC="resume.tex"
OUT="Luis Felipe - Currículo.pdf"

if ! command -v pdflatex >/dev/null 2>&1; then
  echo "Erro: 'pdflatex' não encontrado. Instale TeX Live (ex.: 'sudo apt install texlive-full' ou 'brew install --cask mactex')." >&2
  exit 1
fi

if [[ ! -f "$SRC" ]]; then
  echo "Erro: '$SRC' não encontrado em $SCRIPT_DIR." >&2
  exit 1
fi

BUILD_DIR="$(mktemp -d)"
trap 'rm -rf "$BUILD_DIR"' EXIT

# Duas passadas para resolver referências/hyperref.
pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$BUILD_DIR" "$SRC" >/dev/null
pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$BUILD_DIR" "$SRC" >/dev/null

mv "$BUILD_DIR/resume.pdf" "$SCRIPT_DIR/$OUT"

echo "PDF gerado: $SCRIPT_DIR/$OUT"
