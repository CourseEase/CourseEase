@extends('layouts.user')

@section('content')
    <div class="row m-0">
        <div class="col-md-3">
            <div class="card" >
                <div class="card-body" style="height: 100vh">

                    {{-- Render menu here --}}
                    <h2>User</h2>
                    <p>Render Elements Here</p>
                    <div id="example"> </div>

                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body" style="height: 100vh">

                    {{-- render panel here --}}
                    <h2>User</h2>
                    <p>Render Elements Here</p>

                </div>
            </div>
        </div>
    </div>

@endsection
