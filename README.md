# Marginal Tax Calculator

**Steps to run on local**

* Clone repo  
* Do `npm i` to install depedencies  
* To start Server `npm start`  
* Setup and start docker as mentioned [here](https://github.com/points/interview-test-server)

**Features covered**

* Select assesment year  
* Get tax bracket data based on assesment year
* Take salary input  
* Returns total tax, effective rate, tax breakup  
* Handle api error  

**Optimazation techniques used**

* Memoization (for same input return results from cache without re-calculating)    
* Stored salary input into refs so component doesn't re-render unnecessarily on every key stroke  

**Screenshots** 
![1](https://user-images.githubusercontent.com/38903391/215336536-06b80f06-5954-44f4-bff9-ea387be72b42.png)
![2](https://user-images.githubusercontent.com/38903391/215336540-bdca5b77-313c-42a8-b02c-fa8f7e76afd1.png)
![3](https://user-images.githubusercontent.com/38903391/215336547-d97914c2-95f2-436a-8772-18ae190c2188.png)

**Unit tests report**

![Test Coverage Report](https://user-images.githubusercontent.com/38903391/215336353-5b1f3d34-7031-4087-b1ed-a9fbe88fab6f.JPG)

**Future Scope**

* Loader when api call is being made   
* Retry button when api throws error  
* Husky pre-commit hook

