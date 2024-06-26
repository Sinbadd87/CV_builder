const extractData = (text) => {
  // Extracting name: using a specific pattern or context
  const namePattern =
    /(?:Name|Contact|Profile|Resume)\s+([A-Z][a-z]*\s[A-Z][a-z]*\s?[A-Z]?[a-z]*)/i;
  const nameMatch = text.match(namePattern);
  const fullName = nameMatch ? nameMatch[1] : null;

  // Extracting phone: looking for a pattern that matches phone numbers
  const phoneMatch = text.match(
    /(\+?\d{1,4}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9})/
  );
  const phone = phoneMatch ? phoneMatch[0] : null;

  // Extracting email: using a more generic email regex pattern
  const emailMatch = text.match(
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
  );
  const email = emailMatch ? emailMatch[0] : null;

  // Extracting LinkedIn profile
  const linkedinMatch = text.match(/(linkedin\.com\/in\/[a-zA-Z0-9-]+)/);
  const linkedin = linkedinMatch ? linkedinMatch[0] : null;

  // Extracting skills
  const skillsMatch = text.match(/Top Skills\s*([\s\S]*?)\s*Languages/i);
  const skills = skillsMatch
    ? skillsMatch[1]
        .trim()
        .split("\n")
        .filter((skill) => skill)
    : [];

  // Extracting languages
  const languagesMatch = text.match(/Languages\s*([\s\S]*?)\s*Certifications/i);
  const languages = languagesMatch
    ? languagesMatch[1]
        .trim()
        .split("\n")
        .filter((language) => language)
    : [];

  // Extracting certifications
  const certificationsMatch = text.match(
    /Certifications\s*([\s\S]*?)\s*(?:Experience|Education|$)/i
  );
  const certifications = certificationsMatch
    ? certificationsMatch[1]
        .trim()
        .split("\n")
        .filter((cert) => cert)
    : [];

  // Extracting experience
  const experienceMatch = text.match(
    /Experience\s*([\s\S]*?)\s*(?:Education|$)/i
  );
  let experience = [];
  if (experienceMatch) {
    const experienceText = experienceMatch[1].trim();
    experience = experienceText
      .split("\n\n")
      .map((exp) => exp.trim())
      .filter((exp) => exp);
  }

  return {
    fullName,
    phone,
    email,
    linkedin,
    skills,
    languages,
    certifications,
    experience,
  };
};

module.exports = extractData;
