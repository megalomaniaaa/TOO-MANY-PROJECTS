function adduser()
{
    player1_name = document.getElementById("player1_name_input").value
    player2_name = document.getElementById("player2_name_input").value

    localStorage.setItem("pLaYeR1!",player1_name)
    localStorage.setItem("pLaYeR2@",player2_name)
    window.location="game_page.html"
}
function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
    question_number = "<br>Answer : <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()' >check<button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
anwser_turn = "player1";
question_turn = "player2";
function check()
{
    get_anwser = document.getElementById("input_check_box").value;
    if( get_anwser == actual_answer)
    {
        if(anwser_turn == "player1")
        {
            update_player1_score = player+1;
            document.getElementById("player1_score").innerHTML = update_player1_score
        }
        else
        {
            update_player2_score = player+1;
            document.getElementById("player2_score").innerHTML = update_player2_score
        }
        if(anwser_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question")..innerHTML = "Question Turn - " + player2_name
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question")..innerHTML = "Question Turn - " + player1_name
        }
    }
}