# Contributing to Nova Blocks
First of all, hats off for thinking about contributing.

The following is a set of guidelines for contributing to Nova Blocks. These are mostly guidelines, not rules. Use your best judgement, and feel free to propose changes to this document in a pull requet.

#### How can I contribute?
- [Reporting bugs](#reporting-bugs)
- [Contributing code](#contributing-code)
- [Feature requests and ideas](#feature-requests-and-ideas)

## Reporting bugs
Bugs are tracked as GitHub issues. Before opening a new issue bug on the project's issues page, first make sure that the issues is caused by Nova Blocks.

If you found a bug, the quickest way to get help would be to look through existing open and closed GitHub issues. If the issue is already being discussed and hasn't been resolved yet, you can join the discussion and provide details about the problem you are having. If this is a new bug, please [open a new issue](https://github.com/pixelgrade/nova-blocks/issues/new?assignees=&labels=%5BType%5D+Bug&template=bug_report.md&title=).

## Contributing code

#### Fork this repository
Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.

#### Clone the repository
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the copy to clipboard icon.

Open a terminal and run the `git clone` command followed by the url you have just copied.
```
git clone https://github.com/your-username/nova-blocks
```
Change the working
```
cd nova-blocks
```
The Nova Blocks build system uses NodeJS. To set up it up, you first need to make sure you have NodeJS installed on your machine. Then run the following command in the project root to install dependencies:
```
npm install
```
#### Create a branch
```
git checkout -b your-branch-name
```
Commit your local changes
```
git commit -m "Added this thing to fix this other thing"
```
Once you've made sure all your changes work correctly and have been committed, push your local changes back to github
```
git push -u origin master
```
Visit your fork on GitHub.com and create a pull request for your changes. 
Make sure your pull request describes exactly what you changed and if it relates to an open issue, reference that issue.

## Feature requests and ideas
We track discussions of new features, proposed changes, and other ideas as GitHub issues. If you would like to discuss one of those, please first look through existing open and closed GitHub issues and see if there is already a discussion on this topic which you can join. If there isn't, please [open a new issue](https://github.com/pixelgrade/nova-blocks/issues/new?assignees=&labels=%5BType%5D+Feature&template=feature_request.md&title=).

When discussing new ideas or proposing changes, please take the time to be as descriptive as possible about the topic at hand. Please take the time to explain the issue you are facing, or the problem you propose to solve in as much detail as possible.