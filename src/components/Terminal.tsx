import { useEffect, useRef, useState } from 'react';
import { COMMANDS } from '../data';

const PROMPTS = ['--help', '--get-projects', '--contact', '--about-ai'];

interface Line {
  type: 'prompt' | 'response';
  text: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'response', text: 'Welcome to DOCOBYTE terminal. Type --help or use quick buttons.' },
  ]);
  const [input, setInput] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setLines(prev => [...prev, { type: 'prompt', text: cmd }]);

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const response = COMMANDS[cmd] ?? `Command not recognized: "${raw}". Type --help for available commands.`;

    // Simulate typing response char by char
    const chars = response.split('');
    let current = '';
    let i = 0;
    const interval = setInterval(() => {
      current += chars[i];
      i++;
      setLines(prev => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.type === 'response') {
          next[next.length - 1] = { type: 'response', text: current };
        } else {
          next.push({ type: 'response', text: current });
        }
        return next;
      });
      if (i >= chars.length) clearInterval(interval);
    }, 8);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    runCommand(input);
    setInput('');
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-black overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/40">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-xs text-zinc-500">docobyte-ai-terminal v1.0.0</span>
      </div>

      <div className="p-4 md:p-6">
        <div
          ref={outputRef}
          className="terminal-output font-mono text-sm h-64 overflow-y-auto mb-4 space-y-2 text-zinc-300"
        >
          {lines.map((line, idx) => (
            <div key={idx} className={line.type === 'response' ? 'text-brand-500 whitespace-pre-wrap' : 'text-zinc-200'}>
              {line.type === 'prompt' && `guest@docobyte:~$ `}
              {line.text}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {PROMPTS.map(prompt => (
            <button
              key={prompt}
              type="button"
              onClick={() => runCommand(prompt)}
              className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-brand-500 text-xs font-mono text-zinc-300 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 font-mono text-sm">
          <span className="text-brand-500 shrink-0">guest@docobyte:~$</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-600"
            placeholder="type a command"
          />
        </form>
      </div>
    </div>
  );
}
