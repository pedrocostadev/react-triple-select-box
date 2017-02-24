Prop Name     | Type          |  Mandatory   |  Description
------------- | ------------- | ------------ | -------------
 id                  | string     |  Yes | Unique id for the component.
 numberOfLines       | number     |  No  | Number of lines until we have the scroolbar
 boxStyle            | object     |  No  | Select box style to overwrite default
 labelStyle          | object     |  No  | Labels style to overwrite default
 inputStyle          | object     |  No  | Input style to overwrite default
 rightValues         | Array      |  Yes | Values to show on right box
 leftValues          | Array      |  Yes | Values to show on left box
 centerValues  		 | Array      |  Yes | Values to show on center box
 titleRightBox       | string     |  Yes | Title to show on top of right box 
 titleLeftBox        | string     |  Yes | Title to show on top of left box 
 titleNonselectedBox | string     |  Yes | Title to show on top of center box 
 compareFn           | Function   |  No  | Function that should compare values, returning true if equal and false if not. Used to filter selected values.
 onChange            | Function   |  Yes | Function triggered when user changes values. Receives the new values in this order: LeftValues, CenterValues, RightValues