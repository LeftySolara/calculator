package stack

type Stack []string

func (stack *Stack) Push(value string) {
	*stack = append(*stack, value)
}

func (stack *Stack) Pop() string {
	value := (*stack)[len(*stack)-1]
	*stack = (*stack)[0 : len(*stack)-1]

	return value
}

func (stack *Stack) Peek() string {
	return (*stack)[len(*stack)-1]
}
