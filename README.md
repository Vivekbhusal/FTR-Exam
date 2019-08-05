# The Challange

## Part 1
The application should accept an ongoing series of user supplied numbers as inputs, and output notifications when certain conditions are met. It should operate as follows:
1. On startup, the program will prompt the user for the number of seconds (X) between outputting the frequency of each number to the screen.
2. Every X seconds the program will display, in frequency descending order, the list of numbers and their frequency.
3. If the user enters 'halt' the timer should pause.
4. If the user enters 'resume' the timer should resume.
5. If the user enters a number that is one of the first 1000 Fibonacci numbers, the system
should alert "FIB"
6. If the user enters 'quit', the application should output the numbers and their frequency, a
farewell message, and finally terminate.

```
Example
>> Please input the number of time in seconds between emitting numbers and their frequency
15
>> Please enter the first number
10
>> Please enter the next number
10
>> Please enter the next number
8
>> FIB
>> Please enter the next number >> 10:2, 8:1
halt
>> timer halted
resume
>> timer resumed
8
>> FIB
>> Please enter the next number
33
>> 10:3, 8:2, 33:1
>> Please enter the next number
quit
>> 10:3, 8:2, 33:1
>> Thanks for playing, press any key to exit.
```


## Getting Started

Clone the application => `git clone git@github.com:Vivekbhusal/fibo-interview-test.git`

Install package => `npm install`

Start Application => `npm start`

## Sample Fib Numbers
`1`

`3`

`8`

`987`

`4181`

`24157817`

`806515533049393`

`3987795824799770715342824788687062628452272409956636682999616408`

`2077649278811148299629990130790497978399974693652401690797312244381`

`658276182003137496407122225948572028855537578591430853088767389706978810842887148339827707619843413107416738130721399425`

`1949885951587339044875793733356219760673772926586260591210358470405525665390243100575540781157408285819450131557173898143210104351541330710230926558457389046268596497514105167175`

`4649326900163660310919854588034777960785795767174042210878678322288756043258320098018630118437425368286091440984485413634511629642042032827880286278313342328421326891037271717682651493171103066962116698306`

`26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626`

Test Fib Numbers: https://onlinemathtools.com/test-fibonacci-number

## Some Explantions

Running the application, 
1. It creates a folder "generated-fib-files" 
2. Generates a fibonacci number and stores on a file (file name: fibo-number length .txt)
3. Runs the Application

# Part 2
1. You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL).

`src/application.js` => `processUserInput` has the core logic of the application. 
`response.ts` handles the output after processing user data

If building API, can using `processUserInput` function as callback point. 
The Timer needs to handled based on server/client implementation.

2. To make the application push to production ready, I would 
- Setup CI/CD pipeline 
- Setup compiler (Webpack or similar)
- Write Tests
- Probably/If needed
    - polyfills
    - write some validation based on business case 
    - Add docker
- Write a function to open the application to other user
    - Some options: API, Web-terminal 


3. Honestly this is probably one of the best test I have seen. It tests your hands-on ability but also the overall logical area of software development. 

The exam has potential to confuse about the Fibonacci. But the underlying challanges of memory (like buffer) & performance are the core of it all. 

I can talk more about it. I enjoyed the test. It has potentional to make me keep improving (That can be addictive sometime). You can handle the fibo number search logic in different ways.
With my current implementation, the lookup would be efficient because of file indexing based on length of input number. 



