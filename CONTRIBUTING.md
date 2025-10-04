# Contributing to Paros Rent A Car

First off, thank you for considering contributing to Paros Rent A Car! It's people like you that make this project better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to aggelos@antiparosrentacar.com.

### Our Standards

**Examples of behavior that contributes to creating a positive environment include:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Examples of unacceptable behavior include:**

- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When creating a bug report, include:**

- A clear and descriptive title
- Detailed steps to reproduce the problem
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Browser and OS information
- Any error messages or console logs

**Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome 120]
 - Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Features

Feature suggestions are tracked as GitHub issues. When creating a feature request:

**Include:**

- A clear and descriptive title
- Detailed explanation of the feature
- Why this feature would be useful
- Examples of how it would work
- Mockups or diagrams if applicable

**Template:**

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions.

**Additional context**
Add any other context or screenshots about the feature request.
```

### Pull Requests

We actively welcome your pull requests!

**Good First Issues:**

Look for issues labeled `good first issue` to get started.

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)
- Supabase account (for database features)
- Resend account (for email features)

### Setup Steps

1. **Fork the repository**

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/paros-rent-acar.git
   cd paros-rent-acar
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/paros-rent-acar.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Add your API keys and configuration.

6. **Start development servers**
   ```bash
   npm run dev:all
   ```

7. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components (routes)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── contexts/      # React context providers
├── services/      # API services
├── types/         # TypeScript type definitions
└── data/          # Static data files
```

## 📝 Coding Standards

### TypeScript

- **Strict Mode:** Always enabled
- **Type Safety:** No `any` types unless absolutely necessary
- **Interfaces:** Use interfaces for object shapes
- **Enums:** Use for fixed sets of values

```typescript
// ✅ Good
interface VehicleProps {
  name: string;
  category: string;
  price: number;
}

// ❌ Bad
const vehicle: any = { ... };
```

### React

- **Functional Components:** Use hooks, not class components
- **Props:** Always type your props
- **State:** Use appropriate hooks (useState, useReducer)
- **Effects:** Clean up side effects

```typescript
// ✅ Good
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

// ❌ Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
```

### Styling (Tailwind CSS)

- **Utility Classes:** Use Tailwind utilities
- **Responsive:** Mobile-first approach
- **Dark Mode:** Include `dark:` variants
- **Custom Classes:** Only when necessary

```typescript
// ✅ Good
<div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    Title
  </h2>
</div>

// ❌ Bad
<div style={{ padding: '16px', backgroundColor: 'white' }}>
  <h2 style={{ fontSize: '24px' }}>Title</h2>
</div>
```

### Naming Conventions

- **Components:** PascalCase (`VehicleCard.tsx`)
- **Hooks:** camelCase with 'use' prefix (`useVehicles.ts`)
- **Utilities:** camelCase (`formatDate.ts`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_VEHICLES`)
- **Interfaces:** PascalCase with 'I' prefix optional (`VehicleData` or `IVehicleData`)

### File Organization

- **One Component Per File:** Each component in its own file
- **Co-locate Related Files:** Keep tests, styles near components
- **Barrel Exports:** Use `index.ts` for cleaner imports

```typescript
// components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

### Comments

- **Why, Not What:** Explain complex logic
- **JSDoc:** For public APIs
- **TODO:** Use for future improvements

```typescript
/**
 * Formats a date for display in the booking form.
 * Converts YYYY-MM-DD to DD/MM/YYYY for the external booking system.
 */
function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}
```

## 📦 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, semicolons, etc.)
- **refactor:** Code refactoring
- **test:** Adding or updating tests
- **chore:** Maintenance tasks

### Examples

```bash
feat(fleet): add vehicle filtering by transmission type

Add dropdown filter to allow users to filter vehicles by automatic
or manual transmission. Includes URL parameter support for deep linking.

Closes #123
```

```bash
fix(booking): correct date format for external booking system

The booking form was sending dates in YYYY-MM-DD format, but the
external system expects DD/MM/YYYY. Added formatDate helper function.

Fixes #456
```

```bash
docs(readme): update installation instructions

Add missing step for Supabase configuration and clarify
environment variable setup.
```

### Best Practices

- Use imperative mood ("add feature" not "added feature")
- Keep subject line under 50 characters
- Separate subject from body with blank line
- Wrap body at 72 characters
- Reference issues and pull requests

## 🔄 Pull Request Process

### Before Submitting

1. **Update your branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test thoroughly**
   ```bash
   npm run lint
   npm run build
   ```

3. **Update documentation** if needed

4. **Add screenshots** for UI changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] Tested in dark mode
- [ ] Cross-browser testing

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Related issues referenced
```

### Review Process

1. **Automated Checks:** Linting, building must pass
2. **Code Review:** At least one approval required
3. **Testing:** Reviewers will test your changes
4. **Merge:** Squash and merge after approval

### After Your PR is Merged

1. **Delete your branch**
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

2. **Update your fork**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

## 🐛 Reporting Bugs

### Security Vulnerabilities

**Do NOT open a public issue.** Email aggelos@antiparosrentacar.com instead.

### Bug Report Checklist

- [ ] Checked existing issues for duplicates
- [ ] Can reproduce the bug consistently
- [ ] Included detailed steps to reproduce
- [ ] Added screenshots or error logs
- [ ] Specified browser and OS version
- [ ] Tagged with appropriate labels

## 💡 Suggesting Features

### Feature Request Checklist

- [ ] Checked existing issues for duplicates
- [ ] Clearly described the feature
- [ ] Explained the benefit/value
- [ ] Provided examples or mockups
- [ ] Considered alternative solutions
- [ ] Tagged with 'enhancement' label

## 🎨 Design Contributions

We welcome design improvements!

**Areas for design contributions:**
- UI/UX improvements
- Accessibility enhancements
- Mobile responsiveness
- Dark mode refinements
- Animation and transitions
- Icon design

**Include in your proposal:**
- Mockups or prototypes
- Before/after comparisons
- Accessibility considerations
- Mobile/desktop designs

## 📚 Documentation Contributions

Good documentation is crucial!

**Ways to help:**
- Fix typos or unclear wording
- Add missing information
- Create tutorials or guides
- Improve code comments
- Update outdated content
- Translate documentation

## 🌍 Translation Contributions

We'd love to support multiple languages!

**Currently supported:**
- English (en)
- Greek (el) - partial

**To add a translation:**
1. Create a new locale file
2. Translate all strings
3. Update language selector
4. Test thoroughly
5. Submit PR with screenshots

## 🙏 Recognition

Contributors will be:
- Listed in our Contributors section
- Credited in release notes
- Thanked publicly on social media
- Given a special role in our community

## 📞 Questions?

Need help? Don't hesitate to reach out!

- 📧 Email: aggelos@antiparosrentacar.com
- 💬 Discord: [Join our server](#)
- 🐦 Twitter: [@parosrentacar](#)

---

## Thank You! 🎉

Your contributions make this project better for everyone. We appreciate your time and effort!

**Happy Coding!** 🚗💨
