"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Terminal as TerminalIcon, Copy, Check } from "lucide-react";

const commands = [
  {
    prompt: "$",
    command: "whoami",
    output: "shritej-reddy",
    delay: 500,
  },
  {
    prompt: "$",
    command: "ls projects",
    output: "devtoolkit  inspodeck  focusscape",
    delay: 1000,
  },
  {
    prompt: "$",
    command: "cat about.txt",
    output: "AI Full-Stack Engineer passionate about building intelligent, user-centric products from model to UI.",
    delay: 1500,
  },
];

export default function Terminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [displayedCommands, setDisplayedCommands] = useState<
    Array<{ prompt: string; command: string; output: string; isTyping: boolean }>
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCommandIndex < commands.length) {
        setDisplayedCommands((prev) => [
          ...prev,
          { ...commands[currentCommandIndex], isTyping: true },
        ]);
      }
    }, commands[currentCommandIndex]?.delay || 0);

    return () => clearTimeout(timer);
  }, [currentCommandIndex]);

  const handleTypingComplete = (index: number) => {
    setDisplayedCommands((prev) =>
      prev.map((cmd, i) => (i === index ? { ...cmd, isTyping: false } : cmd))
    );
    if (index < commands.length - 1) {
      setTimeout(() => {
        setCurrentCommandIndex(index + 1);
      }, 1000);
    }
  };

  const copyToClipboard = () => {
    const text = displayedCommands
      .map(
        (cmd) => `${cmd.prompt} ${cmd.command}\n${cmd.output || ""}`
      )
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-20 px-4"
      id="terminal"
    >
      <h2 className="text-3xl font-semibold mb-8 border-b border-[#CB0404] inline-block pb-2">
        Terminal
      </h2>

      <div className="relative">
        <div className="bg-[#1a1a1a] dark:bg-[#0a0a0a] rounded-lg border border-border overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#2a2a2a] dark:bg-[#1a1a1a] border-b border-border">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[#309898]" />
              <span className="text-sm text-muted-foreground font-mono">
                terminal
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1 text-xs bg-muted rounded hover:bg-muted/80 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm">
            {displayedCommands.map((cmd, index) => (
              <TerminalCommand
                key={index}
                command={cmd}
                onTypingComplete={() => handleTypingComplete(index)}
              />
            ))}

            {currentCommandIndex < commands.length && (
              <div className="flex items-center gap-2">
                <span className="text-[#309898]">{commands[currentCommandIndex].prompt}</span>
                <TypingText
                  text={commands[currentCommandIndex].command}
                  speed={50}
                  onComplete={() => {}}
                />
                <span className="animate-pulse">|</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function TerminalCommand({
  command,
  onTypingComplete,
}: {
  command: { prompt: string; command: string; output: string; isTyping: boolean };
  onTypingComplete: () => void;
}) {
  const { displayedText: commandText } = useTypingEffect(
    command.command,
    50,
    0
  );
  const { displayedText: outputText } = useTypingEffect(
    command.output,
    30,
    command.command.length * 50 + 500
  );

  useEffect(() => {
    if (
      commandText === command.command &&
      outputText === command.output &&
      command.isTyping
    ) {
      const timer = setTimeout(() => {
        onTypingComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [commandText, outputText, command, onTypingComplete]);

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#309898]">{command.prompt}</span>
        <span className="text-foreground">{commandText}</span>
        {commandText !== command.command && <span className="animate-pulse">|</span>}
      </div>
      {commandText === command.command && (
        <div className="text-muted-foreground ml-4">
          {outputText}
          {outputText !== command.output && <span className="animate-pulse">|</span>}
        </div>
      )}
    </div>
  );
}

function TypingText({
  text,
  speed,
  onComplete,
}: {
  text: string;
  speed: number;
  onComplete: () => void;
}) {
  const { displayedText } = useTypingEffect(text, speed, 0);

  useEffect(() => {
    if (displayedText === text) {
      onComplete();
    }
  }, [displayedText, text, onComplete]);

  return <span className="text-foreground">{displayedText}</span>;
}
