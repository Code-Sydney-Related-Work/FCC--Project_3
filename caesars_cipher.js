function rot13(str)
            {
                let resultArray=str.split(''); //Created an array for processing individual alphabets              
                let indexTemp;                 
                for(let i = 0; i < resultArray.length; i++) // For decoding the string
                {
                    indexTemp = str.charCodeAt(i);
                    if(indexTemp > 64 && indexTemp < 91)
                    {                        
                        if(indexTemp > 77){indexTemp = (indexTemp-77)+64;}
                        else if(indexTemp < 78){indexTemp = indexTemp + 13;}                 
                    }
                    resultArray[i] = String.fromCharCode(indexTemp);
                }                            
                str = resultArray.join("");
                return str;
            }
            module.exports = rot13;