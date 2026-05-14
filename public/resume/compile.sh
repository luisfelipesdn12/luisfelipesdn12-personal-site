#!/usr/bin/env bash
set -euo pipefail

# Compila resume.tex   -> "Luis Felipe - Currículo.pdf" (pt-BR)
# Compila resume-en.tex -> "Luis Felipe - Resume.pdf"    (en)
# Requer: pdflatex (TeX Live) instalado.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v pdflatex >/dev/null 2>&1; then
  echo "Erro: 'pdflatex' não encontrado. Instale TeX Live (ex.: 'sudo apt install texlive-full' ou 'brew install --cask mactex')." >&2
  exit 1
fi

compile() {
  local src="$1"
  local out="$2"

  if [[ ! -f "$src" ]]; then
    echo "Erro: '$src' não encontrado em $SCRIPT_DIR." >&2
    exit 1
  fi

  local build_dir
  build_dir="$(mktemp -d)"
  trap 'rm -rf "$build_dir"' RETURN

  # Duas passadas para resolver referências/hyperref.
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$build_dir" "$src" >/dev/null
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$build_dir" "$src" >/dev/null

  local base="${src%.tex}"
  mv "$build_dir/${base}.pdf" "$SCRIPT_DIR/$out"

  echo "PDF gerado: $SCRIPT_DIR/$out"
}

compile "resume.tex"    "Luis Felipe - Currículo.pdf"
compile "resume-en.tex" "Luis Felipe - Resume.pdf"
