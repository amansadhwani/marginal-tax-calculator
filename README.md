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
![1](https://user-images.githubusercontent.com/38903391/218268648-18c2d73f-56fb-4bd1-a3e5-74aeda987835.png)
![2](https://user-images.githubusercontent.com/38903391/218268652-d88f6a5c-06cd-45bc-837a-8c0f4f652b02.png)
![3](https://user-images.githubusercontent.com/38903391/218268658-2d91ec01-c453-47df-9174-e3fd188d1143.png)



**Unit tests report**

![Test Coverage Report](https://user-images.githubusercontent.com/38903391/215336353-5b1f3d34-7031-4087-b1ed-a9fbe88fab6f.JPG)

**Future Scope**

* Loader when api call is being made   
* Retry button when api throws error  
* Husky pre-commit hook

