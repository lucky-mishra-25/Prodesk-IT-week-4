# Prompt Design – AI Cover Letter Generator

## 🧠 Purpose of This File

This file documents the **prompt logic and structure** used in the AI Cover Letter Generator project.

At **Level 1**, the AI behavior is simulated using a hardcoded template.
However, this prompt represents how a real AI prompt would be designed in future levels.

---

## ✍️ Conceptual Prompt (Human-readable)

"Write a professional cover letter for a candidate applying for a job.

Candidate Name: {name}
Job Role: {role}
Company Name: {company}
Key Skills: {skills}

Tone:
- Professional
- Confident
- Clear and concise

Structure:
- Greeting
- Introduction
- Skills & interest
- Closing"

---

## 🧪 Mock AI Implementation (Level 1)

At this level, the AI response is simulated using a JavaScript function:

```js
function generateMockCoverLetter(name, role, company, skills) {
  return `Dear Hiring Manager at ${company},

I am writing to express my interest in the ${role} position.

My name is ${name}, and I have experience in ${skills}.

Thank you for your time and consideration.

Sincerely,
${name}`;
}
