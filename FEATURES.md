# µDraft Capabilities, Features and Scenarios

_Allow external reviews, (upon request), of editable document._

## Edit document

### New document

#### Document from scratch

> Given µDraft app  
> When I choose to create a new document  
> Then a new document will be created without text or history

### Open document

#### Open my document

> Given document "doc-a" and "doc-b" in my document folder
> When I open the "doc-a"  
> Then the text of the document "doc-a" will be displayed  
> And I'll have his version history

#### Open document as a reviewer

> Given a URL of a document to review  
> When I open it  
> Then a new page will open in the browser  
> And I will see the author's text

### Make a change suggestion

#### Start suggest change

> Given the document to review  
> When I select a portion of the text  
> And I indicate "start suggest change"  
> Then everything I write will be noted as a "suggested change"

#### End suggest change

> Given a "start suggest change" in process  
> And a text that I have written  
> When I indicate "end of change suggestion"  
> Then what I have written will remain as a "suggestion of change" associated with the selected text

### Annotate comment

#### Start comment

> Given the document to review  
> When I select a portion of the text  
> And I indicate "start comment"  
> Then everything I write will be noted as a "comment"

#### End comment

> Given a "start comment" in process  
> And a text that I have written  
> When I indicate "end of comment"  
> Then what I have written will remain as a "comment" associated with the selected text

## Share document

### Generate URL to clipboard

#### Share version with reviewers

> Given a document "doc-a"  
> When I generate new revision  
> Then a URL associated with the document will be generated  
> And it will be copied to the clipboard

#### Share review with the author

> Given the document "doc-a"  
> And some "comment" or "change sugestion"  
> When I generate new revision  
> Then a URL associated with the reviewed document will be generated  
> And it will be copied to the clipboard

## Compare versions

### Show version history

#### Pick a couple of versions to compare

> Given the document "doc-a"  
> When I choose "compare versions"  
> Then I will be able to select two versions (from his history), to compare them

### Compare two versions

#### View diff between two versions

> Given a list of versions of the document "doc-a"  
> When I select two versions from his history  
> Then I will see the content of those versions at the same time  
> And I will be able to visually see the differences between them  
> And I will be able to see the "annotations" associated with his reference text

## Merge revisions

### Consolidate a change

#### Accept a change suggestion

> Given loaded an editable version of the document "doc-a"  
> And loaded a reviewed version with a "change suggestion"  
> When I accept the "change suggestion"  
> Then I will see the change consolidated on the editable version

<style>
h2 {
  border-top: 3px solid #3d7e9a;
  padding-top: 40px;
  margin-top: 60px!important;
}
h3 {
  display: inline-block;
  background-color: #333;
  line-height: 1.25;
  color:#fff;
  padding: 0 8px 0 20px;
  font-weight:400;
}
h4 {
  padding: 0 2px;
  color: #3d7e9a;
}
</style>
