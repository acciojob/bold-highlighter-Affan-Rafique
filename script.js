function highlight() {
    //Write your code here
	let bold=document.getElementsByTagName("strong");
	for(let i=0;i<bold.length;i++)
		{
	bold[i].addEventListener('mouseover',()=>
		{
			bold[i].style.color='green';
		});
		}
}


function return_normal() {
    //Write your code here
	let normal=document.getElementsByTagName("Strong");
	for(let i=0;i<normal.length;i++)
		{
			normal[i].addEventListener('mouseout',()=>
				{
					normal[i].style.color='black';
				});
		}

    
}
