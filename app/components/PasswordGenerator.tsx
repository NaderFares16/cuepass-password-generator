/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generating, setGenerating] = useState(false);

  const generatePassword = () => {
    setGenerating(true);

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';

    if (includeUpperCase) chars += uppercaseChars;
    if (includeLowerCase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
    setGenerating(false);
  };

  const copyToClipboard = () => {
    const input = document.createElement('input');
    input.setAttribute('value', password);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Password copied to clipboard!');
  };

  return (
    <div className='generator-body'>
      <h2>Safety problems? Try to easily generate strong passwords using <span>Cuepass</span> password generator.</h2>
      <div className='password'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {password && (
            <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
              {password.split('').map((char, index) => (
                <motion.span
                  key={index}
                  style={{ display: 'inline-block', opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <div className='generator-buttons'>
        <button className='generator-btn' onClick={generatePassword} disabled={generating}>
          {generating ? 'Generating...' : 'Generate Password'}
        </button>
        <button className='copy-btn' onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className="generator-options">
      <div className="generator-length">
          <label>
            Characters Length:
          </label>
          <input
              type="number"
              value={length}
              maxLength={20}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
        </div>
        <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          />
          <span className="custom-checkbox"></span>
          Include Uppercase Letters
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
          />
          <span className="custom-checkbox"></span>
          Include Lowercase Letters
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <span className="custom-checkbox"></span>
          Include Numbers
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <span className="custom-checkbox"></span>
          Include Symbols
        </label>
      </div>
      </div>
    </div>
  );
}
