
=> create a variable called “Map_Form_Id” and save your form id to it
=> create a popup for the dataform and pass the “Id” popup parameter to the form
=> create a variable called “Map_Popup_Id” and save the popup id to it

**May View Component**

This business solution provides a custom component to view Board items in a map view. 

Follow the steps below to integrate this component into your app.

Video Explainer: <>

Implementation Steps:

## Step 1: Use the Component in your App
1. Download the “Maps” zip file 
2. Upload the Component: Navigate to the Custom Components section in the app builder. Upload the zip file.
<img width="500" height="350" alt="upload CC" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/63efbb7c-c990-4457-9ae7-567e58b1994c">

## Step 2: Add the Custom Component to Your Page
1. Drag and Drop: In the app builder, drag the Custom Component widget onto your desired page.
<img width="500" height="350" alt="upload CC" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/31523027-bcd8-431b-9240-c8391aa8a734">

## Step 3: Create a field called “Coordinates” (Case sensitive) in your dataform

## Step 4: Create a Page and drag-drop the Custom Component widget onto the page

## Step 5: Drag-drop a Popup onto the same page, and pass the “Id” popup parameter to the form

## Step 6:

## Step 4: Declare Variables in the Code Editor
1. Open Code Editor:
* In the code editor, declare the following variables (use the exact casing since they are declared in the index.html of the zip file)
  1. process_id
  2. field_ids
  3. Approval_step
<img width="500" height="350" alt="declare var" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/846bbdad-53e4-48c6-abba-7a73baa045be">

## Step 5: Use the following code snippet to pass inputs to the declared variables	
 ```javascript
 //Assign the process_id to the variable. Process_id is found in the URL
 kf.app.setVariable("process_id", "Asset_Request_A01"); 

 //Choose the field_ids in the process form needed for the custom component table
 const field_ids = ["Request_Number", "Requester_Name", "Employee_Department", "Reporting_Manager", "Asset_Name"]; 
 kf.app.setVariable("field_ids", field_ids);
  	
 //Select the workflow_step_name to display tasks under it
 kf.app.setVariable("Approval_step", "Manager Approval") 
```
## Final Output

