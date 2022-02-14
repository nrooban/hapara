export const data = {
  userLinks: [
    {
      label: "teacher@school.org",
      role: "Teacher",
      divider: true,
      size: "medium",
    },
    {
      label: "student@school.org",
      role: "Student",
      divider: true,
      size: "medium",
    },
    { label: "Settings", link: "/settings", divider: false, size: "small" },
    { label: "Sign Out", link: "/", divider: false, size: "small" },
  ],
  Applinks: [
    { text: "Classes", link: "/classes", role: "Teacher" },
    { text: "Lessons", link: "/Lessons", role: "Teacher" },
    { text: "Libraries", link: "/Libraries", role: "Teacher" },
    { text: "Classes", link: "/classes", role: "Student" },
    { text: "Assignments", link: "/assignments", role: "Student" },
  ],
  userRole: {
    role: "Teacher",
    email: "teacher@school.org",
  },
};
