**Approve-Reject CC Component**

This business solution provides a custom component to facilitate approve/reject actions within your Kissflow application. 
Follow the steps below to integrate this component into your app.

Implementation Steps:

#Step 1: Download the Component and Upload to Custom Components 
	1. Download the “Approve-Reject CC” zip file 
	2. Upload the Component:
		• Navigate to the Custom Components section in the app builder.
		• Upload the downloaded zip file.
 
#Step 2: Add the Custom Component to Your Page
	1. Drag and Drop:
		• In the app builder, drag the Custom Component widget onto your desired page.
 ![drag custom component](https://github.com/kissflow/lcnc-solution-example/assets/143152047/3a9738fb-24d2-4321-b03e-d6ab606b041f)

Step 3: Configure Page Load Event
	1. Access Page Settings:
		• Go to the Page Settings.
		• Select the On Page Load event option.
		• Choose Javascript Action.
 <img width="1398" alt="page on load" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/b9fd50c1-fe6e-477c-9c3c-ace200cf1958">

 Step 4: Declare Variables in the Code Editor
	1. Open Code Editor:
		• In the code editor, declare the following variables:
 <img width="1098" alt="declare variables" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/31437bdd-83d7-4bd9-a20f-09bddb1bc5fe">

Step 5: Use the following code snippet to pass inputs to the declared variables
	
 	//Assign the process_id to the variable 	
  	kf.app.setVariable("process_id", "Asset_Request_A01"); 

  	//Choose the field_ids needed for the custom component table
  	const field_ids = ["Request_Number", "Requester_Name", "Employee_Department", "Reporting_Manager", "Asset_Name"]; 
   	kf.app.setVariable("field_ids", field_ids);
  	
   	//Select the workflow_step_name to display tasks under it
    	kf.app.setVariable("Approval_step", "Manager Approval")
