function CustomerName(firstname,middlename,lastname){
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;

    this.getFullname= function(){
        return this.firstname +"" + this.middlename +""+this.lastname;
    }
}