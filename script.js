 <script>
        function sendMessage() {
            const destinationInput = document.getElementById('destination-input').value;
            const durationInput = document.getElementById('duration-input').value;
            const chatHistory = document.getElementById('chat-history');

            // Display user message
            chatHistory.innerHTML += `<p>사용자: 가고 싶은 곳 - ${destinationInput}, 여행 기간 - ${durationInput}</p>`;

            // Send user message to ChatGPT API
            getChatGPTResponse(destinationInput, durationInput)
                .then(serverResponse => {
                    // Display server response with image
                    chatHistory.innerHTML += `
                        <p>
                            <img src="../bot.jpg" alt="Chatbot Image" id="chat-image">
                            ${serverResponse}
                        </p>`;
                })
                .catch(error => {
                    console.error('Error fetching ChatGPT response:', error);
                });

            // Clear user inputs
            document.getElementById('destination-input').value = '';
            document.getElementById('duration-input').value = '';
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        async function getChatGPTResponse(destinationInput, durationInput) {
            const apiUrl = 'https://api.openai.com/v1/chat/completions';  // 예시 API 엔드포인트
            const apiKey = %REACT_APP_API_KEY%;  // 실제 API 키로 대체
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'user', content: `가고 싶은 곳: ${destinationInput}, 여행 기간: ${durationInput}` },
                    ],
                }),
            });
            const data = await response.json();
            return data.choices[0].message.content;
        }
    </script>
