#!/usr/bin/perl -w

# Movable Type (r) (C) 2001-2015 Six Apart, Ltd. All Rights Reserved.
# This code cannot be redistributed without permission from www.sixapart.com.
# For more information, consult your Movable Type license.
#
# $Id$

BEGIN {
    $ENV{MT_HOME}   = '/var/www/cms/app';
    $ENV{MT_CONFIG} = '/var/www/cms/app/mt-config.cgi';
}

use strict;
use lib $ENV{MT_HOME} ? "$ENV{MT_HOME}/lib" : 'lib';
use MT::Bootstrap App => 'MT::App::Search';
