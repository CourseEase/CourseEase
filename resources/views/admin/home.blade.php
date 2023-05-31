@extends('layouts.admin')

@section('content')

<div class="row m-0">
    <div class="col-sm-12 col-md-3">
        <div class="card" >
            <div class="card-body" style="height: 100vh">
                
                {{-- Render menu here --}}
                <h2>Admin</h2>
                <p>Render Elements Here</p>
                <div id="example"> </div>

            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-9">
        <div class="card">
            <div class="card-body" style="height: 100vh">

                {{-- Render panel --}}
                <h2>Admin</h2>
                <p>Render Elements Here</p>

                    {{-- example  ************************************************************************************ --}}
                    <div id="data"></div>

                    <script>
                        // resources
                        // http://localhost:8000/show-users/0
                        // http://localhost:8000/show-materials/0
                        // http://localhost:8000/show-courses/0
                        fetch('http://localhost:8000/show-users/0')
                            .then((response) => {
                                if (response.ok) {
                                    return response.json(); // Parse the JSON data
                                } else {
                                    throw new Error('Error: ' + response.status);
                                }
                            })
                            .then((data) => {
                                let element = document.getElementById("data");
                                // Work with the parsed JSON data
                                element.innerHTML += JSON.stringify(data);
                            })
                            .catch((err) => {
                                // Handle error
                            });
                    </script>
                    {{-- ************************************************************************************ --}}

            </div>
        </div>
    </div>
</div>

@endsection