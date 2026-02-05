const form = document.getElementById("coverLetterForm");
const resultBox = document.getElementById("resultBox");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  const coverLetter = generateMockCoverLetter(
    name,
    role,
    company,
    skills
  );

  output.value = coverLetter;
  resultBox.classList.remove("hidden");
});

function generateMockCoverLetter(name, role, company, skills) {
  return `Dear Hiring Manager at ${company},

I am writing to express my interest in the ${role} position at your organization.

My name is ${name}, and I bring strong experience in ${skills}. I am passionate about building impactful solutions and continuously improving my skills.

I would welcome the opportunity to contribute my expertise to ${company} and be part of your team.

Thank you for your time and consideration.

Sincerely,
${name}`;
}

copyBtn.addEventListener("click", function () {
  output.select();
  document.execCommand("copy");
  alert("Cover letter copied to clipboard!");
});
