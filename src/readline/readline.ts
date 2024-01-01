import * as Readline from 'readline';

const rl = Readline.createInterface(process.stdin, process.stdout);
rl.on('close', () => {
    console.log('close');
    
});
async function askQuestion(rl: Readline.Interface, question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    })
}

(async () => {
    for (let i = 0; i < 3; i++) {
        const answer = await askQuestion(rl, `question-${i}: `);
        console.log(`answer-${i}: `, answer);
        
    }
    rl.close();
})();
