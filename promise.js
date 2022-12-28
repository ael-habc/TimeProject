 var hello = function (str)
{
    if (str)
        console.log(str)
    else
        console.log("Hello")
 
}
hello(1)

setTimeout(hello, 1000);

hello(3)