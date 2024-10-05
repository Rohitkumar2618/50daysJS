  toh(n, from, to, aux) {
        // code here
          let count = 0;

    function helper(n, from, to, aux) {
        // Base case: If there's only one disk, move it from 'from' to 'to'
        if (n === 1) {
            count += 1;
            console.log("move disk " + n + " from rod " + from + " to rod " + to);
            return;
        }

        // Recursive step:
        // 1. Move (n-1) disks from 'from' to 'aux' using 'to' as auxiliary
        helper(n - 1, from, aux, to);

        // 2. Move the nth disk from 'from' to 'to'
        count += 1;
        console.log("move disk " + n + " from rod " + from + " to rod " + to);

        // 3. Move the (n-1) disks from 'aux' to 'to' using 'from' as auxiliary
        helper(n - 1, aux, to, from);
    }

    // Start the recursive process
    helper(n, from, to, aux);

    // Return the total number of moves
    return count;
    }