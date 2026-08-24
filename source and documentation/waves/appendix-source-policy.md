# Source policy

## Product facts

לפני שינוי chapters 29–34 בצע web verification.

### IBM Bob GA / deployment status

Use:

`https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software`

Key fact to preserve unless newer IBM source supersedes it:

```text
Bob is generally available as SaaS.
On-premises deployment is targeted in the future.
```

### watsonx Orchestrate ADK

Use current official documentation, especially:

`https://developer.watson-orchestrate.ibm.com/agents/import_agent`

Current conceptual flow:

```text
orchestrate agents import -f agent.yaml
→ Draft

orchestrate agents deploy --name AgentName
→ Live
```

Developer Edition:
- Draft only
- non-production
- deploy to Live is not available

## Source precedence

```text
1. IBM Documentation
2. IBM Product / Newsroom announcement
3. IBM Redbooks
4. IBM engineering blog
5. Third party
```

אם יש סתירה בין source פנימי שקיים ב־repository לבין public IBM source:

- אל תמחוק בשקט.
- דווח ב־final report.
- תן עדיפות למה שהוגדר על ידי owner או למסמך רשמי חדש יותר.
- אל תציג speculation כ־fact.
