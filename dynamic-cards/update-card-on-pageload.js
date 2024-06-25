let accid = kf.account._id
//fetches the account id and assigns to the local variable 'accid'

let resp = await kf.api("/form/2/"+accid+"/Product_catalog_A00/view/Product_gallery_new_A00/list?apply_preference=true&page_number=1&page_size=50&_application_id=Procurement_Cloud_A00")
// Product_catalog_A00 is the page which contains the Gallery view of all products. It also contains the count of items.
// The above API call fetches the JSON payload which has a key-value for 'count'.

let catcount = await kf.app.setVariable("catalog_count", resp.count); 
//'catalog_count' is the Global variable to which the Count from 'resp' is assigned to
