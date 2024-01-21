function help(ans, temp){
    if(ans == null || ans.data >= temp.data){
        temp.next = ans;
        ans = temp;
    }else{
        let temp2 = ans;
        while(temp2.next != null && temp2.next.data < temp.data){
            temp2 = temp2.next;
        }
        temp.next = temp2.next;
        temp2.next = temp;
    }
    return ans;
    }
    
    function insertionSort(node){
        //your code here
    let temp = head;
    let ans = null;
    while(temp != null){
        let nxt = temp.next;
        ans = this.help(ans, temp);
        temp = nxt;
    }
    return ans;
    }