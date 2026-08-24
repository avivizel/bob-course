---
title: "IBM Bob Office Hours - Client Engineering: IBM i Premium Package"
source_file: "10558677_ Bob Office Hours - Client Engineering.docx"
source_type: "meeting transcript"
meeting_date: "June 10, 2026, 3:01PM"
duration: "1h 0m 9s"
language: "English"
purpose: "IBM Bob knowledge/context file"
generated_from: "uploaded DOCX transcript"
---

# IBM Bob Office Hours — IBM i Premium Package

**Original recording title:** 10558677 Bob Office Hours - Client Engineering-20260610_110145-Meeting Recording  
**Meeting date:** June 10, 2026, 3:01PM  
**Duration:** 1h 0m 9s

This Markdown version is structured for use as IBM Bob context. It keeps the source transcript available while adding a compact knowledge index and canonical terminology hints for retrieval.


## Knowledge Index for IBM Bob

This section is a navigation aid derived from the meeting transcript. Use the full transcript below as the source of truth when exact wording or nuance matters.

### Product and positioning
- **Bob V2** introduces the newer Bob modes shown in the session: **Agent, Plan, and Ask**.
- The **IBM i Premium Package** adds IBM i-focused developer and database expertise.
- The session explicitly positions the **native IBM i connection** as the preferred direction over the discussed open-source MCP server.
- The stated rationale for the native path includes IBM support, enterprise security requirements, guardrails, IP protection, and security-by-design.

### IBM i connectivity and execution
- Bob connects to IBM i using the same underlying support used by the VS Code connection, leveraging **SSH**.
- The Premium Package adds tools that can perform IBM i actions such as:
  - read/write source in native locations,
  - run **CL commands**,
  - run **SQL**,
  - work with RPG-related development tasks.
- Bob can work with a **local workspace**, **library list/source physical files**, or **IFS**.
- Local source can still be transferred to IBM i for compilation when an IBM i connection is available.

### Skills and workflows
- **Skills** are invoked through natural-language requests.
- **Workflows** orchestrate multiple steps and skills for more complex tasks.
- The session demonstrates or discusses workflows for:
  - RPG modernization,
  - RPG unit-test planning and implementation,
  - index strategy analysis,
  - business-rules extraction,
  - database/security analysis.
- Users can create their **own workflows, skills, and tools**; built-in workflows discussed in the session are not modified directly.

### Demo examples
- Generate an **ERD** from an IBM i schema by querying system/catalog information.
- Analyze legacy RPG and generate explanatory diagrams.
- Modernize an older RPG program from OPM toward ILE/free-form RPG in a staged workflow.
- Compile after changes to validate each major step.
- Detect and correct a compile/syntax error during iterative modification.
- Add a new field across a display file, database, and RPG program.
- Analyze spool-storage usage and drill into likely sources.
- Extract business rules into a document with requirements, validations, calculations, and decision logic.
- Produce a database security report.

### Human control and permissions
- Bob V2 exposes permissions/approvals for actions.
- Auto-approval can be enabled for some actions.
- The session explicitly contrasts broad auto-approval with a **human-in-the-loop** approach that reviews actions before execution.

### Documentation and source control
- Generated reports can be written to a chosen location.
- The session recommends placing architecture/modernization Markdown documents in **source control**.
- Bob can later use those Markdown documents as project context for subsequent development work.

### Provisioning / TechZone points from the session
- The session discusses availability around the June 24, 2026 GA date.
- TechZone is described as a way to access IBM i environments and request Premium Package-enabled environments.
- Participants recommend planning provisioning requests ahead rather than relying on next-day setup.

> **Source-fidelity note:** This file is derived from an automated meeting transcript. Some phrases in the original transcription contain speech-to-text errors or ambiguous words. The transcript section below preserves those phrases rather than silently rewriting them.

## Canonical Terminology Hints

The transcript contains automatic speech-recognition artifacts. When interpreting it, prefer these canonical product/platform terms where context clearly matches:

| Transcript may contain | Interpret as |
|---|---|
| `IBMI`, `IBM I`, `ItalyItalyIBM`, similar variants | **IBM i** |
| `DV2`, similar variants | **Db2** / **Db2 for i** |
| `Techzone` | **IBM TechZone** |
| `MCP server` | **Model Context Protocol (MCP) server** |
| `ILE` | **Integrated Language Environment** |
| `OPM` | **Original Program Model** |
| `IFS` | **Integrated File System** |
| `QRPG` / `QRPGLE` | IBM i RPG source physical-file conventions referenced in the demo |
| `CL` | IBM i Control Language |

These hints are interpretive aids only; consult the preserved transcript when exact source wording matters.

## Full Transcript

*Bill Millett started transcription*

### Bill Millett — 0:09

So recording should be started. And I'm just going to maybe give it a few more, another 30 seconds or so for people to join.

And.

Okay, so this, this.

for those that weren't able to make it. And this is a special one. We have Tim Rowe joining us to talk about the IBM i Premium plugin, which will be GA on the 24th. So I'm going to hand it over to Tim to talk about that. And I encourage you to all ask questions, learn as much as you can.

This is something that we've seen a lot of excitement around, a lot of questions around it. So we want to be as prepared as possible for hitting the ground as it goes GA. So Tim, please take it away. The floor is yours.

### Tim Rowe — 1:11

Super. Thank you so much, Bill. It's fun to see a few familiar names. Some of you have been reaching out to me recently, so I appreciate that.

So premium package, not plugin bill, just so you're aware. Premium package for I, name of the thing. First and foremost.

This session needs to be interactive. So therefore, I need you guys to ask questions. I'm not going to sit in a room and monologue. That does none of us any good. So let's interact. I'm going to give you a quick update, preview as to what's in this thing. And then, of course, let's go play with it so you can actually kind of see some of this stuff in action.

Premium package for AI, what we've done is, as you're aware, Bob has modes. The modes that you see on the screen, agent, plan, and ask, those are the new modes for Bob. So whatever you might be seeing in your Bob, that's the old stuff. This is the new, because there's a new version of Bob.

also coming out. Guess when?

June 24th, correct. Premium package, we've added two modes, one for the developer to infuse Bob with a persona as an.

expert developer for ItalyItalyIBM, including information about different languages as well as the platform itself. We've also given Bob a persona for the database, as IBMI is a database machine.

We've added core expertises around DV2 for I, SQL, optimizations, design, security, lots of different things from a database perspective. So there's two new modes, be aware of those. In addition to the modes,

We've added a native connector. So I know some of you or some of your colleagues in sales have been talking about the MCP server for IBM i. Stop it. Don't do it. That is not the direction we want or need to be going with. We want to be promoting the premium package. We have a native connector that does not use MCP.

This is using the same support that's part of our VS Code connection.

It's leveraging.

the SSH connection on the IBM i. So it's a very secure, normalized entity. In addition to the native connection through VS Code, wrong way, we've added tools. So we've got a bunch of tools that give Bob the ability to go run and drive actions.

on the IBM i. Beyond reading and writing in native locations, running CL commands, running SQL, paste scripts, RPG units. If you think about...

The use case, development partner. Well, if your development partner needs to develop on IBM i, what are the things on the IBM i they need to do? Well, those are the tools that we've gone and created. So now Bob, your development partner, can go and actually drive and run

actions against the ItalyItalyIBM directly.

Now, we'll dive into some of this more as we get to the demo. We've also...

given a bunch of skills for the developer so that Bob has very specific information on how to do things in the explain, generation, refactor, modernization, execute kind of viewpoint. We've given skills in the database. So again,

giving Bob the ability from an agentic perspective to do things. All of the skills that we've added, all of these are.

called and interacted with via natural language. So that's not like you can prompt and you can go get a list of, I want to select this one. That's not, skills are about leveraging natural language to perform tasks. Some of the tasks that you may want to do,

Tend to be very complex.

So to deal with the complex tools or complex tasks, we've added workflows. Workflows are, for example, the best way to describe a workflow for me is to look at a use case. If I'm going to modernize an RPG program, what does that look like? Well, it depends on your starting point.

Do I have the cycle, I specs, O specs, go tos, indicators, sub procedures? What are the things in that program that need to be moved forward into a modern free form ILE view? And so we've created a workflow that will look at each of those

entities, apply specific skills to solve that problem so that at end of job, we've got a correct program.

So again, we'll go through and I'll show you that.

That's the high-level viewpoint.

Any questions before I dive into demo world?

### Bill Millett — 6:43

I just have a quick one for you, Tim, because to your point about the IBM iMCP server versus the built-in connection, do we have any information that, so if a client were to ask us, you know, why one versus the other, it makes perfect sense from our point of view that.

### Tim Rowe — 6:45

The.

### Bill Millett — 7:03

is built, but do we have information that can explain that why the the MCP server is less ideal? I mean, not just because this is.

### Tim Rowe — 7:13

Simple answer, security.

### Bill Millett — 7:17

OK.

### Tim Rowe — 7:20

You have a supported, IBM supported. Again, if you look at the, if you look at the.

Go back to...

One of the building blocks for why we did what we did for Bob, it's all about enterprise security regulations, guardrails, IP protection. And if you're going to produce an IBM product, it needs to pass all of these security things. It's all done security by design.

So Bob falls under that all of those guidelines, the MCP server.

is an open source toy that somebody created that has some useful value in certain use cases, especially for other, you know, other things. It happens to work in Bob, so, but that's not a direction, especially from a sales perspective that we want to go. Not to mention all the MCP server gives you,

is a connection from your PC to an IBM i. It doesn't provide all the other stuff that I just covered.

### Bill Millett — 8:22

Right.

### Tim Rowe — 8:25

Good question, by the way, Bill.

### Bill Millett — 8:28

Well, it's one of those, we get questions from clients, right? And so I want to make sure everybody's has the information to provide the response. So I just see we have a question for Matt too, sorry.

### Tim Rowe — 8:31

Yeah.

And, and, and, OK, so I got to tell everybody in the room right now, stop raising your hand, just ask the question, because I'll miss, I'll miss your hand ways, so go for it, man.

### Matt Womack — 8:47

Sure thing. Thanks, Tim. Good morning, everyone. Good morning to you, Tim. In terms of positioning the premium package, if the client is asking like, hey, what about our IBM I admins or IBM I like database administrators? Is there some features in the premium package that we should

Should highlight for them, or you know, if we're being asked to kind of, you know, if, if, like, we have an engagement coming up and we have some IBM admins that would be a part of our experience as well for an engagement. I see.

Gotcha.

Yeah.

Yes, sir. Got you. Thank you.

### Tim Rowe — 9:33

So, yeah, it's great. It's a great question. But part of the part of what we built in now, we don't have any agents that are necessarily built in to go take and do administrative tasks per se.

### Matt Womack — 9:47

Mhm.

### Tim Rowe — 9:48

But let's, I'll touch that on the demo. Let's dive in. That's a great question. I'll touch that on demo. So let's just do quick setup so you understand the process. Bob, I'm on Bob V2. Bob V2 is a little different. You'll notice that we have our modes down here.

### Matt Womack — 9:53

Yes, sir.

Awesome. Thank you.

### Tim Rowe — 10:08

Our permissions are now over here.

You have a set of entities up here that you need to pay attention to up in the upper right. I'll cover some of those as we go through the demo. When you get Bob V2, and if you're gonna do anything for IBM i, you want to get the developer pack. Now, this is a requirement. It has...

All of the Code for I plugins that we leverage, so we have a unified experience between our VS Code development and code and Bob. The premium package will need to go on. Again, it is a plugin for VS Code. I also recommend...

add mermaid. That way you get pretty charts. So those are the only things from a setup perspective, be aware of. Now, as an IBM i developer, if you're using VS Code already today, we'll recognize that some of your VS Code settings will be

moved into Bob. When I want to go do things, I need to connect to my IBM i development system. That's our link over here, right? There's a little IBM i system, IBM i. I'm going to click on the IBM i, and you will need to specify your IBM i that you want to connect to. Now,

Already connected.

to an IBM I. I'm connected to a 7.6 system. On that 7.6 system, I have got an application here. I also have the ability to connect and look at the database view. Here's my screen.

Baha.

schema browser, I can see different schemas that I want to go play with. So for example, I have my toy store schema, a bunch of tables, it's got all sorts of good stuff. It's a schema for a IBM i application.

So that's the connection component.

No.

Let's dive into a couple of use cases that could be of interest. I'm going to 1st select the mode that I want to go work with. First thing I'm going to do is I'm going to look at the database mode. Start with that. I want to go...

Select my workspace. The little plus up here allows you to choose the workspace that you want to work with. You can work with your local workspace. Many developers that are leveraging Git, for example, are going to clone their repo to their local workspace. That's what they want to use. Most of our IBM i customers are not doing that.

So that's where we have.

If they're doing really old school, right, they'd have all their source in a source physical file member. That's the library list. Otherwise, you could also have your source in IFS. Pick the workspace. I'm going to choose the library list workspace. Now that I've chosen my workspace, I can start.

working. I want to start with my database because I want to get understanding of this particular schema. So there are just a couple of commands that we've also added. There's a couple of commands that the core Bob team has added.

as well as a couple of the premium packages added. This slash ERD entity relationship diagram. This is one that our team has created. So I can go ERD toy store. Now here's where you're going to see the native connector and the tools.

get put to work and skills for that matter. So the command is going to...

go off and call a couple, right? Here's a skill name, DB2 system catalog. The catalog has got all sorts of information. Well, so let's go ahead and approve that for the skill. Some of the other things that it's going to do is going to go call run SQL against

various tables in that schema to start going and gathering up information. All right, so there you go. We've kept off, that's another thing about Bob, which is Bob V2. Multi-threads, multi-threads. I've got 4 sub-skills that are out here running simultaneously.

Boom. So we've run these, we've gone and got information about the columns, we've got information about the keys, the foreign keys, the constraints, blah, blah, blah, blah, blah, all that stuff.

Here's the summary, and then we'll go ahead and generate the pretty.

Pretty picture, or you can then...

Right.

See pretty picture and how this all fits together. So there's an example of where the MCP server and premium package are significantly different.

Because we are we are not just executing, but we are also.

Because of the smart people that have been building this stuff, we know what to go look for, so therefore that's what we've built into the SQL that's being run.

Okay, questions about this?

Oh, let me go answer a couple of questions here.

Partner wants to start a POC. Great, go for it.

That they want, I mean, you can get Bob trial with Premium Package.

### Bill Millett — 15:54

Yeah, we'll be, we'll also have Techzone. I'll update the guidance for client engineering from requesting for Bobathons or pilots for using this, but the request should, it goes in the way that we do today. We'll just be able to identify that you need IBM i and.

Techzone will add that into the the instance that gets created, or or the shared instance, so should be should be as today, except for now, you'll be able to throw that as an add-on into your your request.

### Tim Rowe — 16:18

Right.

Yep, correct. And your IBMI bill, I would agree, your IBMI, Techzone, great place to go. I've already got people doing that already.

### Bill Millett — 16:26

And then the second one, I think that, sorry, go ahead.

Perfect, yeah, I've seen that. I know Benoit did some stuff I've went through with his labs and he has instructions on that. And so we have those labs that you can use. So everybody, and I'll share the links, but we have, in fact, I think they've already updated them with the.

than he had once before with using Bob and he's already updated them for the premium package with Bob V2. So we should be able to hit the ground running as soon as GA hits.

### Emily Weber — 17:09

Yes, good question going to Techzone environments. I thought you said now, do you have the date? Is that going to be closer to June 24th that the premium package will be available in Techzone?

### Tim Rowe — 17:09

FII.

### Bill Millett — 17:19

Yes. Yeah, it'll be on GA. Yeah. So, and to just make the nuance here too, one of the questions was, how do you get existing IBM i systems to demonstrate and, you know, practice on this? So there are IBM i systems that you can use Techzone to

Get access to, so I mean, you won't have an IBM I system, you know, in your office, so, so it gives you that kind of access, and then, to your point, Emily, yeah, the by GA, once it's out, Techzone will be able to essentially order the instance with...

those, the premium packages added on to them. So you can just include that. And so it'll happen around GA time.

### Tim Rowe — 18:15

And just to follow on, Bill, the, yes, the lab that Benoit created, it all is based on, he just got the latest drop of Bob V2 this morning. We have a lab on Sunday in Europe that he will be doing and running a workshop with customers at that.

Event, so these these labs will be updated with all V2 support.

### Bill Millett — 18:39

Yeah, and Beno has been updating as it goes, so we should be ready to hit the ground as soon as GA is out.

### Tim Rowe — 18:48

Okay, the permission stuff. This is where you can choose what you want to have auto run. So you notice when I ran the ERD, I had to click on approval before it would actually execute. Well, you can set up auto approvals on a whole bunch of different things. So that Bob doesn't ask, it just goes off and does.

But, you know, if you want to, the lazy developer clicks them all. Human in the loop, concerning about security, wants to understand what Bob's actually doing, will review before running.

Okay, let's go switch over to my developer mode for a minute. I'm going to bring up a program. Let me go see what do I have out here right now.

Go.

Clean this up for me.

I'm going to go here and select a beautiful RPG program.

And yes, there it is. That was sarcasm. This is a RPG program that was created back in 1984 or 1985.

Start asking Bob questions. Bob, what is this?

So, again, it'll start taking.

Look, it's going to read the file, it's going to determine what it is, and because we're in the developer mode, it has a little bit of smarts built into that. You can see that it displays a workstation display program, leverages a display file, has the data structure, main logic.

Okay.

Create a diagram.

So it's going to go look at some skills that we've created. Basic, what the heck is RPG? We've infused Bob with a great deal of additional information above and beyond what the ALM has in it so that Bob has a far greater ability to get things correct.

Tim.

We'll also go and look at the, now search the ItalyItalyIBM a little bit because this program references.

a display file, right? So we found that.

My team didn't fix this yet. I have to go. I asked them to do this yesterday. This should be done in this should be done in Mermaid.

All right.

So now, there we go. That's what it should look like, right? Pretty view, right? Ugly view, pretty view. We want to use pretty views because it demos nicer and far more understandable.

Okay, great. Now that I have an understanding of this, I want to modernize this thing because quite frankly, I don't want to look at this. I don't want to understand it. So let's, can you modernize this? Now, in the grand scheme of AI prompts, this is a terrible prompt.

Let's just be clear about that, but because I'm in my developer mode using Premium Package.

Bob has some smarts built into it. It also notices that there is a workflow that we've created that will do this task. So you have a choice. You can either...

Do it the agentic way, which may or may not get you the right answer, or leverage the workflow. Obviously, we want to look at the workflow.

The workflow is going to go ahead and get started.

Right, yep, that's the member I have active. That's the one that I want. So it's going to do an interactive, ask you some questions. It's going to go read the member to get a clue about what's going on in this RPG program.

So, first things that it figured out.

OPM, it's going to go to ILE.

It's going to create a temporary member first, and it's going to put it in the QRPGLE source file. Let's look at that. My program is in the QRPG source. That's where OPM goes. ILE goes in the ILE.

source physical file. It's a different directory. Bob's smart enough to figure that out. So let's convert this first strictly from OPM to ILE, nothing else. So step one.

So it's going to go through, do, and do this is a step-by-step process.

Hopefully, at the end of the day, we get it, you know, get it right the first time. That's obviously the goal. So this is actually running a CL command that's on the IBM line.

It's done the conversion, right?

What did it? Did it do it correct? No clue. Let's go compile it. So first step is to go compile that program. So now we are running, there it is, we are running a create RPG bound CL command on the IBM i.

And it was successful.

So, we have compiled this program and made certain that first step worked great.

All right, now that we know that it's good, we're actually going and looking at the program itself, the object that we just created, because we want to validate that that object is existing and is in good shape based on some information that we can glean there.

Right, next step.

I'm going to go create the freeform part. I'm going to go create the final freeform. Where do you want it really to live? Do you want to put it in this same location, and this will be the name, or do you have a different place? I'm going to select.

This one?

That's going to go create the member, and then it's going to start interrogating the program for different aspects of the conversion.

Right, it's going to, well, it realizes that we just did a compile, so I don't need to do it again. It's going to go look for, it's going to go look for.

Ice packs.

Doesn't find any. It's going to go look for O specs.

I didn't find any. Just going to skip those. Now it's going to do the actual conversion itself. So each one of these is a step-by-step process because it all needs to be dealt with in a proper manner.

Yes, proceed.

I...

We got our to-do list.

We'll approve that, and we'll go through and finish the the actual.

Text to freeform conversion.

All right, there we go.

It has a proper free form, but it wants to write the file. Again, I don't have approvals here, so I'll approve the write.

And Bob will go ahead and start writing that into my QRPGLE source directory. It's written it.

Right, there's the updated written.

Pyle.

And it's going to go ahead and run the compile actions against it.

Compiled, completed, successful.

OK.

Questions.

This last little bit is generating the...

Um...

It's creating a modernization summary report.

There we go, there's the final.

Final summary report, what it did, what was changed, what was preserved, all the details.

Any questions?

### Emily Weber — 28:40

Does this report stay in the chat or is it saved anywhere in the IBM I system as well? Same with like the markdown files that are created with the regular Bob package that usually are created in our workspace.

### Tim Rowe — 28:51

Uh...

You can, you can ask it to be, um, wherever you'd like, so let me...

Let's look at the moment this is going into chat, so let me let's let Bob finish creating the.

### Emily Weber — 29:01

Wissam.

### Tim Rowe — 29:10

Creating this, and it may ask us a question if we want to write the file.

Or if it doesn't, we can ask it to.

Okay, it's getting close. It's on the summary.

Yeah, I'm A developer. I'm impatient.

OK, there's the report. OK, Bob, can you write?

The.

Summary report to slash home slash timer slash stock.

That's gonna go check to see that that file that location exists.

And then it'll go about the process of actually doing that and writing that. And as a recommendation for our customers, right, creating architecture documents, stuff like this here, these are things that all should become part of the source control process.

So they should all go.

into their source control, it all should become part of what they do on a daily basis to keep track of things. Because if there are markdown documents that exist, Bob will leverage those as it looks to go get understanding as it's going and doing additional things. So if I wanted to

To answer the question that's currently out there, if I wanted to go tell Bob to add a new feature to this program and write some new RPG code,

Bob would leverage this information as part of that process, and it would do it. So there we go. My report's been written. If I come over to my IFS browser, open up my timer directory here for a second, go to doc.

409 Modernization Report.

There we go. There it is.

Okay.

Yeah, thanks, Emily. So the...

The one question, can it be used to create new programs, new prompts? Yes, Bob can do any and all of these things. So let's go take a look at a...

Ohh.

an option here. So I'm going to open up, not that one. I want my display files. There we go. So in my display files, I've got...

Yes, I have a screen. There's my screen. Isn't it lovely?

I've got flight maintenance information. Say I want to add another field. I have this airline type. Why don't I say,

Yeah, Bob, in the...

Wait, mate.

That's.

Screen.

Add a new field.

or the number of flight hours.

Or the...

Airplane.

****.

Um...

Yeah.

So at this point, Bob's going to go off and go do a little bit of digging, because I, again, did not give it a good prompt. This is a terrible prompt, because it didn't give it context. But I've worked with enough of our IBM i developers, I would consider this business as usual.

Ah, look at this. I can see that this display file, flight maintenance schedule.

And this is the program along with the database. Hey, awesome. It found what it needed. So now it's going to go off and start the process of addressing the request that I gave it. So it's going to go modify the DDS, it's going to modify the database, it's going to modify the RPG program.

So.

And it's going to, again, look for more context by looking at other things so it has a full understanding before it decides to get itself in too much trouble.

Alright, now that it's read everything, it's gonna go create.

A plan.

Step one and two, database.

OK, other questions while this is...

Chugging along.

### Matt Womack — 34:58

Hey Tim, could Bob do, I would imagine like based on what you're showing us, if there was like a mapping that maybe the back in the logic and the screens don't line up, it seems to me like this capability could be like, hey, it looks like you added a field, but something.

It's not wired up, you know, to that feel like it, yep, cool, it's interesting.

### Tim Rowe — 35:19

Yeah.

Deb.

Because, well, it's all about source. So we can look at the display file, it understands display files. It can go identify, hey, I got, you got a field in your database that's not used anywhere.

It can go find that for you.

All right, so now it's added stuff to the display file. It's added stuff to the RPG programs. So if I wanted to go look at what it's doing, right, there's my RPG program. I don't think it's made the change yet.

Okay, change files. There we go. Down here, this is cool. You probably didn't see that, but there was a little underneath, there's this file changes. So you can see, these are the files that have been updated. If I want to go see what it's doing, let's go look at the display file.

There we go. I can see the diff. If I wanted to go see what changed in the RPG, right? Boom.

Oh, there's the, oh, that was, oh, that was the 409 one. That's why it's everything. Totally makes sense.

It's updated.

The 401 RPG program, right?

error, right? Played hours. It's creating the variable names here.

as well as adding these things into the actual code itself.

And now it wants to go and compile everything to make certain that it didn't screw anything up.

Go ahead and just run the compiles quick, just so we can...

make certain that we're happy on this front.

There's a DDS syntax error.

The right parentheses was not found. So Bob made a mistake. No worries. Bob corrects the mistake. So Bob went and made the update, got that cleaned up.

By the difference.

Now it's going to do it all over again.

OK.

Other questions?

All right.

### Bill Millett — 38:13

There's another couple of questions in the chat, and so...

And.

### Tim Rowe — 38:20

Yes.

Okay, so the answer to two questions, can it create tests and can it analyze hysterical information? The answers to those are yes, it can do.

Any and all of those kind of things, again, part of it depends on what you ask it to go do. Now, some of the admin stuff, like I stated from the start, our current focus has been around the development persona. It doesn't mean that you couldn't ask Bob to go off and do certain things. All right, so for the time being, I'm going to just...

skip this process and I'm going to start a new one. So let's just kind of reject this. I'm going to reject and.

Go ahead and end the task.

Just so we can get to some other some other things in the.

Demo, just so you can see a few things. I'm gonna go clean up some stuff. You asked about testing.

if I don't want to.

Pinto.

Oh, it's still running. I need to.

Stop it. So this guy, actually, I'll just let this run in the background then, whatever.

Testing. In addition to be able to start things via natural language, you can also click on this little button up here that says start workflow. So I click on the start workflow. You want to select the workspace that you want to look at. I'm going to select this first one here for the moment, the local workspace.

And we are going to give you a list of existing workflows that have been created. So, to answer your question about testing, we have settled upon something called the RPG Unit Testing Framework, and I can go and create a test plan. What this will do, it'll go look.

### Bill Millett — 40:15

Okay.

### Tim Rowe — 40:26

It'll go look at your code, identify the code, the procedures.

the whatever, whatever, create a test plan with all the details, and then you can go implement the test plan.

which is going to actually go and physically create the test cases and the test suites based on the information that you created in the test plan. So it's a two-step process.

So there will be, I'm not going to walk through the video on that because it's a little bit more time intensive than I want to take for the next couple minutes. There is and will be videos created on this that will be available on the Bob YouTube channel.

couple other workflows that are of interest.

There's one here that's fascinating, the Index Strategy Advisor. Bob will go out and take a look at all sorts of information on your system itself.

And we'll go look at the plan cache, your MTIs, and other things to give you a sort of the IBMI shop, a set of recommendations on how to.

Better do performance.

with their index strategies on the ItalyItalyIBM for their applications. So very useful.

Okay, let me go ask for the administrator for a second. Let's go, let's go look at that one. I'm in my IBMI developer mode.

Bob, there are all.

Sorts.

of SQL Services. I want to...

Whatever.

Find out who is using all the spool storage on the system.

So, again, barely.

generic request. Bob is going to go look, do a doc search to go look at a bunch of SQL examples. It's found a couple examples. It's going to now want to run this against by IDMI. So these are the different

There we go. So it actually ran this SQL statement.

On the ItalyItalyIBM.

and came to the conclusion that, oh, there's my report. Don wins. I'm in second. Scott's second.

Would you like to drill down further? For example, see all the spool objects owned or break down the results by output queue?

Yeah, what are the...

Um...

Yeah, let's...

Right.

Down just the files or done.

Now, you notice, I didn't even give it the right information. I just said Dawn, not Dawn M. But, you know.

Bob does okay.

So it's now.

Running a few.

Ah, look at that.

Root cause? Job Watcher job logs. Con haywire. Look at that. Good job. Bob identified the jobs that Job Watcher jobs that Don ran.

And generated storage, right? So, there's just a...

You know, it gives some recommendations.

on cleanup, how accurate those are? It's a good question. So there you go. There's a just a really brief example of looking at Bob from an administrative perspective.

Okay.

Other questions?

Anybody?

### Akshay Mallireddy — 45:12

Yeah, I had a quick question. Oops, sorry.

### Emily Weber — 45:13

This.

### Tim Rowe — 45:16

Yeah, go ahead, Askari.

### Akshay Mallireddy — 45:19

Yeah, so regarding the, yeah, so regarding the workflows, would it be possible for us to create our own workflows for our specific use cases? Okay, and.

### Tim Rowe — 45:19

Action.

Das.

Of course, everything, everything in Bob is extendable.

### Akshay Mallireddy — 45:33

Yeah, and then I'm sure, okay.

### Tim Rowe — 45:34

You can go create your own workflows, skills, tools, any of that, correct.

### Akshay Mallireddy — 45:38

Okay, and then, so like the workflow, kind of my understanding is, it's basically a set, like test case after this, so it does this, then this, and this. So then, would it be able to deviate past that specific path depending on the use case, or would it like stick to that?

### Tim Rowe — 45:54

Yeah, yeah, we've identified and we've specified the steps in the workflow. So you can't go modify my workflows, but you can go create and do your own workflows.

### Akshay Mallireddy — 46:07

Okay.

Yeah, thank you.

### Tim Rowe — 46:13

A couple other workflows that are of interest that I do want to touch on since you mentioned workflows.

Business rules extraction.

This is one that absolutely I know.

I've had people ask things about. So this is going to go.

Library list, like 400.

Gonna go look at the source. I want QRPG.

I'm going to do the ILE source. I'll do the nice one. Select an option member in there. I'm going to look at...

Twenty-one.

Now it's going to go analyze this member. So what it's going to go do now is go create a...

Business rules document.

for this particular program. So it's going to go analyze both the source as well as the additional components, the display, print files, database files, that are all part of that particular application. So you can see right now it's off running a whole bunch of different tools.

These things are all being run simultaneously. So it's multi-threaded now, so you can do multi-tasks, which greatly improves performance. Also, the thing that's cool about all of this stuff right here, everything that's being run right here is not...

being added to my, there's no coin usage going on at this, from this perspective, or so minimal, because all this stuff is running on the IBM i and pulling data.

Once it has all the data, then it'll start going.

You can see right here, our business rules and extraction, we've used almost no no no coins for this for this process so far. It'll use some more when it actually takes and start processing processing the data to actually build the report.

All right.

Still chugging along here for a minute, so while this is working any other.

Questions.

If you notice, if you want to see the to-do list, at the top of the bar, my to-do list. It's closed by default, but you can see this is the process that it's going through. So that's where that is now in Bob V2.

OK, other questions?

Oh, and you'll notice Bob now has a bit of a sense of humor along the way.

You could also give Bob a job log. Bob could go look at the job log to help identify where the problem is, things of that nature. So there's a few numbers of different options of things that you can do.

This will take another about two minutes for this to finish up.

It's a fairly intensive.

Bit of work.

Actually, all this is working. Let's just go take a look at what gets created just so you can understand it. So under my docs, business rules, FRS 21, this is the actual document that it created.

just so you can kind of take a look at that while this is finishing up. So it's going to give you an executive detailed view of the different business requirements from a business perspective of what's in here.

Some validations, summaries, if I keep going down, some of the other things, here's my calculation rules. So that's how this rule was created. There's also decision logic trees that also get built into this. So you can actually see.

### Bill Millett — 50:46

I.

### Tim Rowe — 50:47

From a business perspective, how this business logic is created and specified.

Okay.

Got about 5 minutes left.

### Bill Millett — 51:03

Yeah.

### Tim Rowe — 51:04

Any other questions?

So.

Bob is off, diligently working here for the moment, while this, while that's...

Doing this.

Let's go start another task. So I'm going to go switch over to my database mode. I've got my, again, toy store schema. You know, hey, can you

report on security.

So one of the other skills that we've created is taking a look at DB2 security best practices. Fascinating skill that's going to go take a look at, again, all sorts of information on the ItalyItalyIBM itself.

It's gonna go look at the database, it's gonna go look at the schemas, it's gonna go.

Take a look at.

and run a whole bunch of queries on the ItalyItalyIBM.

And build your report.

If you ask Bob at finding vulnerabilities, yes, you can ask Bob that, and he, depending on what you ask it to do, you will get varying degrees of success with that.

So, again, that's off off and running. Where's Bob at with?

this right here. Ah, there we go. It wants to write the file. So let's put this in the docs.

IFS directory, and it's going to go ahead and create a document to this new path. Report saved.

There you go.

Again, again, this is a nice feature with Bob V2. I can do, I can have multitasks running at the same time.

I can just go pop back and forth, and there we go. Watch him go.

Okay.

### Bill Millett — 53:43

I think we can.

### Tim Rowe — 53:44

I should.

Anybody? Hello?

### Bill Millett — 53:54

Yeah.

### Cameron Seitz — 53:54

Hey, I have a quick question.

How good is Bob at bouncing between your local directory and on the IBM I? Like, can you ask it to look at a code base that's local and then, you know, move, like compile it on the IBM I or something like that?

### Tim Rowe — 53:58

Yeah, bye.

Yes.

Yes.

Of course, absolutely.

### Cameron Seitz — 54:15

OK, so you don't have to be strict about like the workspaces thing with their.

### Tim Rowe — 54:16

You just have to have, you just...

You just have to have, you just have to call.

Bob is going to look at the source and the workspace that you identify.

### Cameron Seitz — 54:26

Okay.

### Tim Rowe — 54:27

But if you're using the developer mode, right? I mean, and you have a connection to an, you can't compile code without a connection to the IBMI.

### Cameron Seitz — 54:35

Right.

### Tim Rowe — 54:36

So if you have a connection, right, and if I work with some code in my local workspace, it's still going to compile it on the IBM I. So it'll move that code down your IBM I, put it into a temp directory, do the compile, give you confirmations.

### Cameron Seitz — 54:53

Okay, thanks.

### Bill Millett — 54:56

Yeah.

Alright, last questions for Tim. We're getting, we're getting close to the wire, so...

### Tim Rowe — 55:01

Um...

Ann.

And Bill, as far as I know at the moment, there is no ability to get this before GA. Other than for you guys, because you're from IBM, you guys can get access to it. Because I can, and Bill, I think, do you have access to the box? I think I gave you access to the box tonight.

### Bill Millett — 55:11

Right.

I don't think, oh yeah, yeah, I'll double check. I know that, I know that we've, there's a few, a few people that we've sent to Peter to get early access to get skilled up to be become SMEs. So.

### Tim Rowe — 55:27

No or no?

Or it.

Yeah, well, feel free to add people, IBMers only, to that box.

### Bill Millett — 55:45

Okay.

And I've included, so access for clients before GA, I'll have updated the instructions on that. It's the same process that we have now, but I'll have more information specifically around making sure the request for IBM i, so that will be there.

And as always, you can reach out to me if you have questions around that. But once it's GA, we'll be able to give access to clients to, you know, do Bobathons and pilots and all those good things.

Um, and hopefully everybody will be updated to Bob Bob V2 by then, and uh, it'll be it'll be crazy the the last week of June.

### Tim Rowe — 56:24

So here's just a view for the...

Yeah.

Very well, so here's just a quick view of the report that got generated on the security stuff, so lots of good information.

Hey, uh, Simon, question.

### Swayam Barik — 56:49

Yeah, sorry, I was just a quick follow-up, so...

I know that we're saying that basically we won't be able to get this in client's hands until the GA date. Is there any sort of details around, like, is the Techzone reservation system or anything going to change for the premium packages, or will it be kind of like the other ones where we'll be able to...

### Tim Rowe — 57:03

Correct.

### Swayam Barik — 57:15

Specify, or you know, do we have any details around, you know, how reserving it will go for these trials and stuff, or?

### Tim Rowe — 57:20

Sorry. Hopefully, hopefully, Bill can answer that, because I have no clue on Techzone.

### Bill Millett — 57:23

It.

Yeah, it it should it should be the same, and so for for the requests that go in, you'll just you should just be able to specify that you need IBM i premium package, and and so they'll take care of that there. I mean, it's adding a little bit to the tech zone, so I mean, obviously.

Last minute requests are tough. Tech zone is swamped. It's not very automatic yet. To that end, there's also a bunch of changes coming to the admin screens. There'll be like team admins and things like that. I've seen the mockups, but it's not live yet. So things might be changing a little bit in terms of that. But the basic.

process is the same where you put in that request and just kind of indicate that you need IBM I and that that'll be added. So we walked through it with Techzone and it'll be the same for Z and I and Java mod.

all the premium packages. So pretty straightforward. I will say that it's really hard to do next day. It happens sometimes. People are like, I don't have the environment and I need it tomorrow. If that's the case, reach out to me, but try to plan ahead. It takes about a week, if possible, to get these things provisioned.

So, you know, Techzone is doing their doing their best. They're buried with the number of requests we have.

### Swayam Barik — 58:55

Okay, yeah, yeah, makes sense. Just wanted to confirm, so thank you.

### Bill Millett — 58:59

Yeah.

And the plan is for the VMs, if we have clients, like a lot of FSM clients can't install Bob, we always recommend that they try to get them to get approval to install Bob if possible. It's a much better experience. But if they can't, there will be a VM that already has.

the extensions installed, the plan is to install all the extensions, so you could just use that VM and it will have Bob V2 on it. But again, it's one of those things that will happen as we get to GA. So.

### Tim Rowe — 59:35

All right, I got to go drop to another call. Thanks, everybody.

### Bill Millett — 59:39

Sincere thanks, Tim. We really appreciate it. Thank you everybody for joining. I'll have the replay up. If you have further questions, please reach out. Thanks for your time and patience.

### Tim Rowe — 59:41

And, uh, anytime.

*Bill Millett stopped transcription*
