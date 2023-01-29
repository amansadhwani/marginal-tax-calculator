# marginal-tax-calculator

# Screenshots 



# Steps to run on local

1)Clone repo  
2)Do `npm i` to install depedencies  
3)To start Server `npm start`
4)Setup and start docker as mentioned ![here](https://github.com/points/interview-test-server)

# Features covered

1)Select assesment year  
2)Get tax bracket data based on assesment year
3)Take salary input  
4)Returns total tax, effective rate, tax breakup  
5)Handle api error  

# Optimazation techniques used

1)Memoization (for same input return results from cache without re-calculating)    
2)Stored salary input into refs so component doesn't re-render unnecessarily on every key stroke  

# Unit tests report




# Future Scope

1)Loader when api call is being made   
2)Retry button when api throws error  


