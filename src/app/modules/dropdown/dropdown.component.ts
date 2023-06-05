import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {


formsConfig69118={
placeholder:'string A',
isMultiple: false,
options:[
{
id:'1',
name:'string A'
}
]
};


checkboxconfig6582={
type: 'checkbox',
custom: false,
checked:true,
disabed:false,
};


formsConfig6261={
theme:'default',
type: 'default',
heading:  'login',box:  true,isRememberMe:  true,
formFields: [
{
 radio:true,
 type:  'radio',
 fieldType:  'input',
 label:  'season',
 controlName:  'season',
 options:['Winter', 'Spring', 'Summer', 'Autumn']
 },
 ]
};


quickSelectConfig6256={
isMultiple:false,
options: [{'id':'1',
'name': 'ALL',
},
],
};


toggleconfig4222={
onBg: '#2c98f0',
offBg: 'gray',
knobBg: '#2c98f0',
height: 14,
width: 33,
knobSize: 20,
}

}
