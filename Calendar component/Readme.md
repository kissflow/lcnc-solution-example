**Calendar View**

This business solution adds a custom calendar view for your project management dashboards.

Follow the steps below to integrate this component into your app.

Video Explainer: <>

**Prerequisites**
1. Your app should have a Board form, presented on a Page, and atleast a couple of tasks.

Implementation Steps:

## Step 1: Use the Component in your App
1. Download the “Calendar View” zip file
2. Upload the Component: Navigate to the Custom Components section in the app builder. Upload the zip file.
<img width="500" height="350" alt="upload CC" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/63efbb7c-c990-4457-9ae7-567e58b1994c">

## Step 2: Add the Custom Component to Your Page
Drag and Drop: In the app builder, drag the Custom Component widget onto your desired page.
<img width="500" height="350" alt="Screenshot 2024-07-10 at 4 17 46 PM" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/51e07438-cb56-4566-a015-e00047eab6be">

## Step 3: Setting up your Calendar View page
Create Popup (to show items on click):
1. Drag and drop the Popoup widget
2. Name the Popup name and header title
3. Create a Popup parameter called "Item_Id" _(case sensitive)_
<img width="500" height="350" alt="Calendar view CC ppopup ss" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/4a24632f-b694-4403-ad37-4f5ceca880b4">

## Step 4: Configuring the Popup with a Form (data-binding)
1. Drag and drop the Form widget into the popup container
2. Select Flow type and select Flow (Complaint Management in this use case)
3. Pass the "Item_Id" popup parameter to the Case Id of the Form
<img width="500" height="350" alt="configuring popup and passing pp ss" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/1fb4a81d-2202-41a1-8c01-85afa5e90228">

## Step 5: Find the Board Id and Popup ID
<img width="500" height="350" alt="find board id" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/8be19fc4-ce9d-4acb-a81b-d600b0f6c776">

<img width="500" height="350" alt="find popup id" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/877eecef-6c7a-419e-8173-0903a48538bd">

## Step 6: Create Variables
1. Board_Id _(case sensitive)_, and set default value to the Board Id from Step 5
2. popup_id _(case sensitive)_, and set default value to the Popup Id from Step 5
<img width="500" height="350" alt="create variable" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/214fe611-8816-4326-a52b-0751a2c03adc">

## Example Output
<img width="500" height="350" alt="calendar view output" src="https://github.com/kissflow/lcnc-solution-example/assets/143152047/d57ed11c-8c6a-4ddc-affa-04c5cf8fb248">
