# Internal Tools Access – Waitlist UI

Just a simple waitlist form I built for the internship assignment. It's a single page made with Next.js and Tailwind, no backend stuff.

## Live Site

https://waitlist-ui-red.vercel.app/

## What I Used

- Next.js with the App Router
- Tailwind for styling
- Deployed on Vercel

## What It Does

Pretty straightforward - there's a card in the middle of the screen with an email input, a text area where people explain why they want access, and a submit button. The button only works if everything validates correctly.

## How I Did the Validation

### Email Part

For the email check, I didn't want to mess with complicated regex patterns. Instead I just used split("@") to grab whatever comes after the @ symbol. Then I check if that matches any of the common personal email domains like gmail.com, yahoo.com, outlook.com, hotmail.com, or icloud.com. If it does, I show an error saying "Business emails only." and the form won't submit.

### Reason Field

This one was simpler. I just count the characters they type using .length. Needs to be at least 20 characters. I put a little counter below the textarea that shows something like "15/20" so they know how many more they need. It turns red when they're under 20 so it's obvious.

## What Happens When You Submit

Once both things pass validation, I just flip some state in React and hide the form. Then it shows "You have been added to the queue." That's it. No actual API calls or anything, just changing what's displayed.

## Deploying It

I pushed the code to GitHub and connected the repo to Vercel. Now whenever I push to main it rebuilds automatically.

## One Problem I Ran Into

Everything deployed fine, but I noticed a small issue while testing the validation. After reviewing the code, I fixed the logic and made sure it worked correctly on the live site.

## That's It

Everything from the assignment is in here - just the one page, no backend, no extra stuff. Should work if you clone it and run it locally or just check the live link.
