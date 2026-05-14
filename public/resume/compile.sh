#!/usr/bin/env bash
set -euo pipefail

# Compila resume.tex   -> "Luis Felipe - Currículo.pdf" (pt-BR)
# Compila resume-en.tex -> "Luis Felipe - Resume.pdf"    (en)
# Requer: pdflatex (TeX Live ou MiKTeX) instalado.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v pdflatex >/dev/null 2>&1; then
  echo "Erro: 'pdflatex' não encontrado. Instale TeX Live (ex.: 'sudo apt install texlive-full') ou MiKTeX." >&2
  exit 1
fi

compile() {
  local src="$1"
  local out="$2"

  if [[ ! -f "$src" ]]; then
    echo "Erro: '$src' não encontrado em $SCRIPT_DIR." >&2
    exit 1
  fi

  local build_dir log_file
  build_dir="$(mktemp -d)"
  log_file="$build_dir/pdflatex.out"
  trap 'rm -rf "$build_dir"' RETURN

  # Duas passadas para resolver referências/hyperref.
  # Em erro, mostra a tail do log para facilitar diagnóstico.
  if ! pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$build_dir" "$src" >"$log_file" 2>&1; then
    echo "Erro ao compilar $src. Últimas linhas do log:" >&2
    tail -n 40 "$log_file" >&2
    [[ -f "$build_dir/${src%.tex}.log" ]] && { echo "---"; echo "Log completo: $build_dir/${src%.tex}.log"; }
    exit 1
  fi
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$build_dir" "$src" >"$log_file" 2>&1 || true

  local base="${src%.tex}"
  mv "$build_dir/${base}.pdf" "$SCRIPT_DIR/$out"

  echo "PDF gerado: $SCRIPT_DIR/$out"
}

compile "resume.tex"    "Luis Felipe - Currículo.pdf"
compile "resume-en.tex" "Luis Felipe - Resume.pdf"
