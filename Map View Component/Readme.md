**Map View Custom Component**

This business solution provides a custom component to view Kissflow Board items on a Map view.
Follow the steps below to integrate this component into your app.

Implementation Steps:

## Step 1: Use the Component in your App
a. Download the “Map View.zip” zip file 

b. Upload the Component: Navigate to the Custom Components section in the app builder and upload the zip file.

<img width="500" height="350" alt="create map cc" src="https://github.com/user-attachments/assets/14134afe-74d2-4e0f-92ae-fe65edb6101f">

## Step 2: Create a text field named "Coordinates" and text area field named "Customer Address" in your Board. This is to create pins on the Map View.

<img width="500" height="350" alt="create coordinates field" src="https://github.com/user-attachments/assets/049dfda7-6e35-4f9f-8ecb-f4427a215011">

Note: The field names are case sensitive. If you wish to use different names, they have to be tweaked in the index.html file.

## Step 2a: Copy the below code and paste in the code editor of the onChange event of the "Customer Address" text area field

This code fetches the coordinates of the address typed in the "Customer Address" text area field. Note: This is a free API and has usage limitations.

```javascript
let address = await kf.context.getField("Customer_Address"); // Replace the Customer_Address with the field_id of your address field
async function getCoordinates(address) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1&limit=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      return `${parseFloat(lat)}, ${parseFloat(lon)}`;
    } else {
      throw new Error('Geocoding failed: No results found');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
  }
}
getCoordinates(address).then(coords => {
  console.log('Coordinates:', coords);
  kf.client.showInfo(coords);
  kf.context.updateField({"Coordinates": coords});
});

```
<img width="500" height="350" alt="address onchange event" src="https://github.com/user-attachments/assets/68f56b54-95f8-42c7-adc5-4545328ad0b1">

## Step 3: Create a Page and use the Map View custom component on it

<img width="500" height="350" alt="use map cc on page" src="https://github.com/user-attachments/assets/f318736e-d9c6-4e20-9571-aabfb77278ab">

## Step 4: Use a Popup on the page to show the item of the selected map pin in the Map View
a. Create Popup parameter

<img width="500" height="350" alt="create popup parameter" src="https://github.com/user-attachments/assets/8ed567f0-e905-4a76-91f0-2460e8dc59bb">

b. Pass the Popup parameter to the Data form

<img width="500" height="350" alt="pass popup parameter to form" src="https://github.com/user-attachments/assets/85cae0fb-09b1-4f8b-aa26-97d69e7eac62">

## Step 5: Create Variables
a. Map_Form_Id

b. Map_Popup_Id

<img width="500" height="350" alt="create variables" src="https://github.com/user-attachments/assets/8c3d461e-e1bc-44fb-8a6a-5d5d2809273d">

## Example Output

<img width="500" height="350" alt="final output" src="https://github.com/user-attachments/assets/8f56bc25-c30b-48e9-a837-962fa775eb3f">
