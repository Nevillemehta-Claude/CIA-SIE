#!/bin/bash

# CIA-SIE Backend Study Mode Toggle Script
# =========================================
# This script enables/disables backend-only study mode for Cursor
# by swapping .cursorignore files and hiding/showing frontend code

PROJECT_DIR="/Users/nevillemehta/Downloads/CIA-SIE"

enable_study_mode() {
    echo "═══════════════════════════════════════════════════════════════"
    echo "  ENABLING BACKEND STUDY MODE"
    echo "═══════════════════════════════════════════════════════════════"

    # Backup original cursorignore
    if [ -f "$PROJECT_DIR/.cursorignore" ]; then
        mv "$PROJECT_DIR/.cursorignore" "$PROJECT_DIR/.cursorignore.original"
        echo "✓ Backed up .cursorignore → .cursorignore.original"
    fi

    # Activate backend-study cursorignore
    if [ -f "$PROJECT_DIR/.cursorignore.backend-study" ]; then
        cp "$PROJECT_DIR/.cursorignore.backend-study" "$PROJECT_DIR/.cursorignore"
        echo "✓ Activated backend-study .cursorignore"
    fi

    # Hide frontend folder
    if [ -d "$PROJECT_DIR/frontend" ]; then
        mv "$PROJECT_DIR/frontend" "$PROJECT_DIR/_HIDDEN_frontend"
        echo "✓ Hidden frontend → _HIDDEN_frontend"
    fi

    # Hide HTML files
    if [ -f "$PROJECT_DIR/app.html" ]; then
        mv "$PROJECT_DIR/app.html" "$PROJECT_DIR/_HIDDEN_app.html"
        echo "✓ Hidden app.html"
    fi

    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    echo "  BACKEND STUDY MODE ENABLED"
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    echo "  Cursor can now ONLY see:"
    echo "    ✓ /src/cia_sie/     (backend code)"
    echo "    ✓ /tests/           (backend tests)"
    echo "    ✓ /alembic/         (migrations)"
    echo ""
    echo "  Cursor CANNOT see:"
    echo "    ✗ /frontend/        (hidden)"
    echo "    ✗ app.html          (hidden)"
    echo "    ✗ *.jsx, *.tsx      (blocked)"
    echo ""
    echo "  To restore: ./toggle_backend_study_mode.sh disable"
    echo "═══════════════════════════════════════════════════════════════"
}

disable_study_mode() {
    echo "═══════════════════════════════════════════════════════════════"
    echo "  DISABLING BACKEND STUDY MODE"
    echo "═══════════════════════════════════════════════════════════════"

    # Restore original cursorignore
    if [ -f "$PROJECT_DIR/.cursorignore.original" ]; then
        mv "$PROJECT_DIR/.cursorignore.original" "$PROJECT_DIR/.cursorignore"
        echo "✓ Restored original .cursorignore"
    fi

    # Restore frontend folder
    if [ -d "$PROJECT_DIR/_HIDDEN_frontend" ]; then
        mv "$PROJECT_DIR/_HIDDEN_frontend" "$PROJECT_DIR/frontend"
        echo "✓ Restored frontend folder"
    fi

    # Restore HTML files
    if [ -f "$PROJECT_DIR/_HIDDEN_app.html" ]; then
        mv "$PROJECT_DIR/_HIDDEN_app.html" "$PROJECT_DIR/app.html"
        echo "✓ Restored app.html"
    fi

    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    echo "  BACKEND STUDY MODE DISABLED"
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    echo "  All files are now accessible to Cursor."
    echo ""
}

show_status() {
    echo "═══════════════════════════════════════════════════════════════"
    echo "  CURRENT STATUS"
    echo "═══════════════════════════════════════════════════════════════"

    if [ -d "$PROJECT_DIR/_HIDDEN_frontend" ]; then
        echo "  Mode: BACKEND STUDY (frontend hidden)"
    else
        echo "  Mode: NORMAL (all files visible)"
    fi

    echo ""
    echo "  Hidden items:"
    [ -d "$PROJECT_DIR/_HIDDEN_frontend" ] && echo "    - _HIDDEN_frontend/"
    [ -f "$PROJECT_DIR/_HIDDEN_app.html" ] && echo "    - _HIDDEN_app.html"

    if [ ! -d "$PROJECT_DIR/_HIDDEN_frontend" ] && [ ! -f "$PROJECT_DIR/_HIDDEN_app.html" ]; then
        echo "    (none)"
    fi
    echo ""
}

# Main script
case "$1" in
    enable)
        enable_study_mode
        ;;
    disable)
        disable_study_mode
        ;;
    status)
        show_status
        ;;
    *)
        echo "Usage: $0 {enable|disable|status}"
        echo ""
        echo "Commands:"
        echo "  enable  - Hide frontend code, enable backend-only study mode"
        echo "  disable - Restore all files, return to normal mode"
        echo "  status  - Show current mode"
        exit 1
        ;;
esac
