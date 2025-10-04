# 🎯 CV Tailoring for [[Role]]

## 📝 Initial Data 
- **Target Role**: [[Role]]
- **Role Type**: [[role_type]] (e.g., Engineer, Developer, Analyst, Manager)

## 📋 Objective
Your task is to act as an expert career assistant. You will create a new, tailored version of my CV for the specific role of an [[Role]]. You will also perform a comprehensive skills gap analysis based on my existing qualifications.

## 📚 Context & Input Files
You will need to reference the following source files and directories on my local machine:

### 📄 Base CV Documents
- **Primary CV**: `6_Symbols/2_Cv/cv.html`
- **Experience Data**: `6_Symbols/2_Cv/experinces.json`
- **Skills Data**: `6_Symbols/2_Cv/skill.json`
- **Skills Matrix**: `6_Symbols/2_Cv/skillmatrix.csv`
- **Contact Info**: `6_Symbols/2_Cv/contactinfo.json`

### 📝 Markdown CV Versions
- **Latest CV**: `6_Symbols/3_Markdown/cv.md`
- **Skills Documentation**: `6_Symbols/3_Markdown/2_skills.md`
- **Work Experience**: `6_Symbols/3_Markdown/3_work_experience.md`
- **Projects**: `6_Symbols/3_Markdown/5_projects.md`

> ⚠️ **Important**: You must stay true to the skills and experiences documented in these source files.

## ⚙️ Step-by-Step Instructions

### 1️⃣ Create Directory Structure
- Create a new sub-folder by incrementing +1: `4_UI/versions/`
- Set your operational focus to this new directory
- All outputs must be generated here

### 2️⃣ Analyze & Map Skills
Thoroughly review all the Base CV Documents and supporting files listed above.

**Identify all skills, projects, and experiences that are directly relevant to [[Role]]:**
- 🎯 **Core competencies** for [[role_type]] positions
- 🔧 **Technical skills** specific to [[Role]]
- 💼 **Industry experience** relevant to the role
- 📊 **Quantifiable achievements** that demonstrate expertise
- 🚀 **Leadership and project management** experience
- 📚 **Certifications and education** aligned with [[Role]]

> 📝 **Note**: Place identified skills in a file called `skillsgap.md`

### 3️⃣ Generate Outputs
Based on your analysis, create the files specified in the "Output Requirements" section below.

## 📄 Output Requirements

Generate the following files inside the new folder created in `4_UI/versions/` directory:

### 1️⃣ Tailored CV (HTML)
- **Filename**: `cv_[[role]].html`
- **Title**: [[Role]]
- **Content**: A clean, professional, single-page HTML document containing the tailored CV
- **Focus**: Rephrase and reorder content to strongly emphasize [[Role]]-related skills and experiences

### 2️⃣ Tailored CV (Markdown)
- **Filename**: `cv_[[role]].md`
- **Title**: [[Role]]
- **Content**: A well-formatted Markdown version identical to the HTML version
- **Formatting**: Use proper markdown headers, bullet points, and emphasis

### 3️⃣ Skills Gap Analysis
- **Filename**: `skillsgap.md`
- **Content**: A comprehensive analysis document with the following structure:

```markdown
## 🔍 Key [[Role]] Skills Identified
- [Bulleted list of your existing skills that are relevant to [[Role]]]

## 📈 Potential Skill Gaps & Areas for Growth
- [Bulleted list of common [[Role]] skills not strongly represented]

## 🎯 Recommended Action Items
- [2-3 concrete steps to fill these gaps]
```

## 🎨 Quality Standards
- ✨ **Professional appearance** with clean, modern formatting
- 🎯 **Targeted content** that speaks directly to [[Role]] positions
- 📊 **Quantifiable achievements** where possible
- 🔄 **Consistent terminology** throughout all documents
- 📱 **Responsive design** for HTML version

## 🚀 Success Criteria
- [ ] All files generated in the correct directory
- [ ] Content accurately reflects source material
- [ ] [[Role]] focus is clear and compelling
- [ ] Skills gap analysis provides actionable insights
- [ ] Professional formatting maintained throughout