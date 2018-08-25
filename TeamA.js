function CustomerName(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;

    this.getFullname= function(){
        return this.firstname +"" + this.lastname;
    }
}