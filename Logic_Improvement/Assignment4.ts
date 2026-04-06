//1.Create fields variable which contains the sample data given belowd
const fields = {
    "Hierarchies": [],
    "Dimensions": [
        {
            "isNumericDataType": false,
            "entityName": "Order ID",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Order Date",
            "variableType": "interval",
            "dataType": "date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "entityName": "Order Date_Year",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Quarter",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Month",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Day",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Weekday",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "str",
            "subcol": true
        },
        {
            "entityName": "Order Date_Week number",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "isNumericDataType": false,
            "entityName": "Country",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "City",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "State",
            "variableType": "geographical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "mappingDetails": {
                "unMappedLocationCount": 0,
                "message": ""
            }
        },
        {
            "isNumericDataType": false,
            "entityName": "Region",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Product ID",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "calculatedFieldKey": "2d2ea994-f27d-43a9-b3ee-d0c7baf5dcae",
            "variables": [
                {
                    "entityName": "Customer Name",
                    "variableType": "categorical",
                    "dataType": "text"
                }
            ],
            "isCalCache": false,
            "isCalculatedField": "True",
            "parameters": [],
            "parameterNameList": [],
            "isValid": "True",
            "isNumericDataType": false,
            "entityName": "Cal32",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        }
    ],
    "Measures": [
        {
            "isNumericDataType": true,
            "entityName": "Row ID",
            "variableType": "numerical",
            "dataType": "integer",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Postal Code",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Sales",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Quantity",
            "variableType": "numerical",
            "dataType": "integer",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Discount",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Profit",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Blank Column",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "calculatedFieldKey": "aab7d6bc-2947-42b7-9923-c6fec9471978",
            "variables": [
                {
                    "entityName": "Cal1",
                    "variableType": "numerical",
                    "dataType": "float",
                    "calculatedFieldKey": "9ebc4055-8b67-42f3-a6eb-2a49acddb80f",
                    "parameters": [],
                    "parameterNameList": []
                },
                {
                    "entityName": "Sales",
                    "variableType": "numerical",
                    "dataType": "float"
                }
            ],
            "isCalCache": false,
            "isCalculatedField": "True",
            "parameters": [],
            "parameterNameList": [],
            "isValid": "True",
            "isNumericDataType": true,
            "entityName": "Cal2",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "calculatedFieldKey": "9ebc4055-8b67-42f3-a6eb-2a49acddb80f",
            "variables": [
                {
                    "entityName": "Profit",
                    "variableType": "numerical",
                    "dataType": "float"
                },
                {
                    "entityName": "Sales",
                    "variableType": "numerical",
                    "dataType": "float"
                }
            ],
            "isCalCache": false,
            "isCalculatedField": "True",
            "parameters": [],
            "parameterNameList": [],
            "isValid": "True",
            "isNumericDataType": true,
            "entityName": "Cal1",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        }
    ],
    "Details": [
        {
            "isNumericDataType": false,
            "entityName": "Category",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Sub_Category",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Product Name",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        }
    ]
};

//2.Combined all the items from Details, Measures, Dimensions, Hierarchies into single variable named fieldList

const fieldList = [
    ...fields.Dimensions,
    ...fields.Measures,
    ...fields.Details,
    ...fields.Hierarchies
];
//console.log(fieldList);

//3.Filter fieldList to get the array that contains “calculatedFieldKey” key in it and save that array in variable named calculatedfields
const calculatedfields = fieldList.filter(field => 'calculatedFieldKey' in field);
//console.log(calculatedfields);

//4.Find the index of the item whose entityName is “Discount” and remove that item from the fieldList
const discountItem=fieldList.filter(Item=> Item.entityName==='Discount');
const discountIndex = fieldList.findIndex(item => item.entityName === 'Discount');
if (discountIndex !== -1) {
    fieldList.splice(discountIndex, 1);
}
// console.log(`Removed ${discountItem.length} items from fieldList`);
// console.log('Updated fieldList:', fieldList);


//5.Change the flag isNumericDataType to true and datatype to Numerical whose entityName is “City”
const cityItem=fieldList.filter(Item=>Item.entityName==='City');
cityItem.forEach(item => {
    item.isNumericDataType = true;
    item.dataType = "Numerical";
});
//console.log('Updated City item(s):', cityItem);


//6.Combine variables array into single array from the calculatedfields and find the variables list whose variableType is “numerical”
// First, get calculatedfields (items with calculatedFieldKey)
const calculatedfields2 = fieldList.filter(field => 'calculatedFieldKey' in field);

// Combine all variables arrays into a single array
const allVariables = calculatedfields.flatMap(field => (field as any).variables || []);

// Find variables whose variableType is "numerical"
const numericalVariables = allVariables.filter(variable => variable.variableType === 'numerical');
// console.log('calculatedFields', calculatedfields2);
// console.log('All combined variables:', allVariables);
// console.log('Numerical variables:', numericalVariables);


//7.From Dimensions array from fields store the index of the item whose Parent" = "Order Date" in to array named dataIndex.

// Find indices of items where Parent === "Order Date"
const dataIndex: number[] = [];

fields.Dimensions.forEach((item, index) => {
    if (item.Parent === "Order Date") {
        dataIndex.push(index);
    }
});

//console.log('Indices found:', dataIndex);

//8.Loop over Dimensions array and check if the index of the item is present in dataIndex array and if present then print the entityName of that item

fields.Dimensions.forEach((item,index)=>{
    dataIndex.map((i)=>{
        if(i==index){
           // console.log(item);
        }
    })
})


//9.From Measures array from the fields change the key “datasetId” to “datasetKey” or add new key “datasetKey” with same value as “datasetId”

fields.Measures.map(measure => {
    (measure as any).datasetKey = measure.datasetId;
});
//console.log(fields.Measures);


//10.Find the item from the fieldList with "variableType" =  "geographical" and then make unMappedLocationCount = 5  

fieldList.map((item)=>{

    if(item.variableType==='geographical'){
        (item as any).mappingDetails.unMappedLocationCount=5;
       // console.log(item);
    }
});


//11.Find items from the fields array whose isNumericDataType = true and datatype =  float then change subDatasetId to datasetId  and save all the items in array named NumericalItems

const NumericalItems = fieldList.map((item) => {
    if (item.isNumericDataType === true && item.dataType === 'float') {
        const anyItem = item as any;
        anyItem.datasetKey = anyItem.datasetId;
        delete anyItem.datasetId;
        
    }
    return item;
});
//console.log(NumericalItems);