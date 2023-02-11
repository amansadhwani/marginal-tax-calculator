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

**Optimization techniques used**

* Memoization (for same input return results from cache without re-calculating)    
* Stored salary input into refs so component doesn't re-render unnecessarily on every key stroke  

**Screenshots** 
![1](https://user-images.githubusercontent.com/38903391/215337402-31b4b0dc-c2b5-409c-af44-34743745c49d.png)
![2](https://user-images.githubusercontent.com/38903391/215336540-bdca5b77-313c-42a8-b02c-fa8f7e76afd1.png)
![3](https://user-images.githubusercontent.com/38903391/218268414-35f0c72a-cd28-45f6-94af-834634c07c48.JPG)


**Unit tests report**

![Test Coverage Report](https://user-images.githubusercontent.com/38903391/215336353-5b1f3d34-7031-4087-b1ed-a9fbe88fab6f.JPG)

**Future Scope**

* Loader when api call is being made   
* Retry button when api throws error  
* Husky pre-commit hook

