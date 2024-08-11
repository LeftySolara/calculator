package evaluator

import (
	"calculator/pkg/stack"
	"strconv"
	"strings"
)

// Evaluate an expression using Reverse Polish Notation
func EvaluateRPN(s *stack.Stack) float64 {
	if !strings.Contains(s.Peek(), "+-*/") {
		// TODO: Throw an error here.
		return -1
	}

	// TODO: Loop through the whole stack to evaluate the entire expression.
	operator := s.Pop()
	a, _ := strconv.ParseFloat(s.Pop(), 64)
	b, _ := strconv.ParseFloat(s.Pop(), 64)
	var result float64

	switch operator {
	case "+":
		result = b + a
	case "-":
		result = b - a
	case "*":
		result = b * a
	case "/":
		result = b / a
	}

	return result
}
