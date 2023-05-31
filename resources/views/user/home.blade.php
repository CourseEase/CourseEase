@extends('layouts.user')

@section('content')
<div class="row m-0">
    <div class="col-sm-12 col-md-3">
        <div class="card" >
            <div class="card-body" style="height: 100vh">
                
                {{-- Render menu here --}}
                <h2>User</h2>
                <p>Render Elements Here</p>
                <div id="example"> </div>
                <div id="menu"></div>

            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-9">
        <div class="card">
            <div class="card-body" style="height: 100vh">

                {{-- Render panel --}}
                <h2>User</h2>
                <p>Render Elements Here</p>

                {{-- example  ************************************************************************************ --}}

                <div id="loading"></div>
                <div id="display"></div>

            
                {{-- ************************************************************************************ --}}

            </div>
        </div>
    </div>
</div>

@endsection
