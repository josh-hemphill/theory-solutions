function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
  }
  
  // Add any helper functions you may need here
  // function travelTree(node, stack, maxLeft = 0)
  
  function visibleNodes(root) {
	// Write your code here
	let curStack = [root];
	let curDepth = 0;
	while(curStack.length) {
	  for (let i = 0;i<curStack.length;i++) {
		const node = curStack[i];
		let newNodes = [];
		if (node.right) newNodes.push(node.right);
		if (node.left) newNodes.push(node.left);
		curStack.splice(i,1,...newNodes)
		i = i + newNodes.length - 1;
	  }
	  curDepth++
	}
	return curDepth;
  }

  function printInteger(n) {
	var out = '[' + n + ']';
	return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
	var result = (expected == output);
	var rightTick = "\u2713";
	var wrongTick = "\u2717";
	if (result) {
	  var out = rightTick + ' Test #' + test_case_number;
	  console.log(out);
	}
	else {
	  var out = '';
	  out += wrongTick + ' Test #' + test_case_number + ': Expected ';
	  out += printInteger(expected);
	  out += ' Your output: ';
	  out += printInteger(output);
	  console.log(out);
	}
	test_case_number++;
  }
  
  var root1 = new TreeNode(8);
  root1.left = new TreeNode(3);
  root1.right = new TreeNode(10);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(6);
  root1.left.right.left = new TreeNode(4);
  root1.left.right.right = new TreeNode(7);
  root1.right.right = new TreeNode(14);
  root1.right.right.left = new TreeNode(13);
  var expected_1 = 4;
  var output_1 = visibleNodes(root1);
  check(expected_1, output_1);
  
  var root2 = new TreeNode(10);
  root2.left = new TreeNode(8);
  root2.right = new TreeNode(15);
  root2.left.left = new TreeNode(4);
  root2.left.left.right = new TreeNode(5);
  root2.left.left.right.right = new TreeNode(6);
  root2.right.left = new TreeNode(14);
  root2.right.right = new TreeNode(16);
  var expected_2 = 5;
  var output_2 = visibleNodes(root2);
  check(expected_2, output_2);
