# chmod +x /Users/rifaterdemsahin/projects/cv/6_Symbols/3_Markdown/merge.sh; /Users/rifaterdemsahin/projects/cv/6_Symbols/3_Markdown/merge.sh
#!/bin/bash

# Get today's date in YYYY-MM-DD format
TODAY=$(date +"%Y-%m-%d")

# Define the base directory
BASE_DIR="/Users/rifaterdemsahin/projects/cv/6_Symbols/3_Markdown"

# Define the output file path
OUTPUT_FILE="${BASE_DIR}/cv_${TODAY}.md"

# Create the output file with a header
echo "# Rifat Erdem Sahin - CV (${TODAY})" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Define the order of files to merge
FILES=(
    "${BASE_DIR}/1_personal_info.md"
    "${BASE_DIR}/2_skills.md"
    "${BASE_DIR}/3_work_experience.md"
    "${BASE_DIR}/4_education.md"
    "${BASE_DIR}/6_certifications.md"
    "${BASE_DIR}/7_additional_info.md"
    "${BASE_DIR}/8_references.md"
)

# Merge each file in order
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        # Add a separator between sections
        echo "---" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
        
        # Append the file content
        cat "$file" >> "$OUTPUT_FILE"
        
        # Add extra newline for spacing
        echo "" >> "$OUTPUT_FILE"
    else
        echo "Warning: File $file not found"
    fi
done

# Make the output file readable
chmod 644 "$OUTPUT_FILE"

echo "CV has been merged into $OUTPUT_FILE"
