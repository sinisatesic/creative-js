let app = new function() {


    this.el = document.getElementById('countries');

    this.countries = ['Italy', 'France', 'Ireland'];

    this.Count = function(data) {
        let el = document.getElementById('counter');
        let name = 'country';

        if (data) {
            if (data > 1) {
                name = 'countries';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function() {
        var data = '';

        if (this.countries.length > 0) {
            for (i = 0; i < this.countries.length; i++){
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        this.Count(this.countries.length);
        return this.el.innerHTML = data;
    };


    this.Add = function () {
        // alert('add something');
        el = document.getElementById('add-name');
        //get the value
        let country = el.value;

        if (country) {
            // add the new value
            this.countries.push(country.trim());
            // reset input value
            el.value = '';
            // display the new list
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        // alert(item);
        let el = document.getElementById('edit-name');
        // diplay value in the field
        el.value = this.countries[item];
        // display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            // get value
            let country = el.value;

            if (country) {
                // edit value
                self.countries.splice(item, 1, country.trim());
                // diplay the new list
                self.FetchAll();
                // hide fields
                CloseInput();
            }
        }
    };

    this.Delete = function (item) {
        // Delete the current row
        this.countries.splice(item, 1);
        // display the new list
        this.FetchAll();
    };

}

app.FetchAll(); //displays initial table presented;
//  without this function being called here, initial table of array of countries will not appear until new country is added


function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';